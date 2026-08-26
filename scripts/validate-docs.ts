import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const ROOT = process.cwd();

const DOCS_DIR = path.join(ROOT, 'docs');

const SCHEMA_PATH = path.join(
  ROOT,
  'schemas',
  'document-frontmatter.schema.json',
);

/**
 * ---------------------------------------------------------
 * Load schema
 * ---------------------------------------------------------
 */

if (!fs.existsSync(SCHEMA_PATH)) {
  console.error(`❌ Schema not found: ${SCHEMA_PATH}`);
  process.exit(1);
}

const schema = JSON.parse(
  fs.readFileSync(SCHEMA_PATH, 'utf8'),
);

/**
 * ---------------------------------------------------------
 * AJV
 * ---------------------------------------------------------
 */

const ajv = new Ajv2020({
  allErrors: true,
  strict: false,
});

addFormats(ajv);

const validate = ajv.compile(schema);

/**
 * ---------------------------------------------------------
 * Types
 * ---------------------------------------------------------
 */

type Frontmatter = Record<string, unknown>;

/**
 * ---------------------------------------------------------
 * Find all MDX files
 * ---------------------------------------------------------
 */

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMdxFiles(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith('.mdx')
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * ---------------------------------------------------------
 * Normalize frontmatter
 *
 * gray-matter / js-yaml có thể parse:
 *
 * createdAt: 2026-08-26
 *
 * thành:
 *
 * Date
 *
 * Trong khi JSON Schema yêu cầu:
 *
 * string + format date
 *
 * Vì vậy chuyển Date -> YYYY-MM-DD
 * ---------------------------------------------------------
 */

function normalizeDate(value: unknown): unknown {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return value;
}

function normalizeFrontmatter(
  data: Frontmatter,
): Frontmatter {
  const normalized: Frontmatter = {
    ...data,
  };

  normalized.createdAt = normalizeDate(
    normalized.createdAt,
  );

  normalized.updatedAt = normalizeDate(
    normalized.updatedAt,
  );

  normalized.publishedAt = normalizeDate(
    normalized.publishedAt,
  );

  return normalized;
}

/**
 * ---------------------------------------------------------
 * Format AJV error path
 * ---------------------------------------------------------
 */

function formatErrorPath(
  instancePath: string,
): string {
  if (!instancePath) {
    return '/';
  }

  return instancePath;
}

/**
 * ---------------------------------------------------------
 * Validate one document
 * ---------------------------------------------------------
 */

function validateDocument(
  filePath: string,
): boolean {
  const relativePath = path.relative(
    ROOT,
    filePath,
  );

  const source = fs.readFileSync(
    filePath,
    'utf8',
  );

  let parsed: matter.GrayMatterFile<string>;

  /**
   * Parse frontmatter
   */
  try {
    parsed = matter(source);
  } catch (error) {
    console.error(`\n❌ ${relativePath}`);

    console.error(
      '  Invalid frontmatter syntax.',
    );

    if (error instanceof Error) {
      console.error(
        `  ${error.message}`,
      );
    }

    return false;
  }

  /**
   * Check frontmatter exists
   */
  if (
    !parsed.matter ||
    parsed.matter.trim().length === 0
  ) {
    console.error(`\n❌ ${relativePath}`);

    console.error(
      '  Missing frontmatter.',
    );

    console.error(
      '  Document must start with:',
    );

    console.error('  ---');

    console.error(
      '  id: DOC-XXX-001',
    );

    console.error(
      '  title: Document title',
    );

    console.error(
      '  ...',
    );

    console.error('  ---');

    return false;
  }

  /**
   * Normalize Date objects
   */
  const data = normalizeFrontmatter(
    parsed.data as Frontmatter,
  );

  /**
   * AJV validation
   */
  const valid = validate(data);

  if (!valid) {
    console.error(`\n❌ ${relativePath}`);

    for (const error of validate.errors ?? []) {
      const errorPath =
        formatErrorPath(
          error.instancePath,
        );

      let message =
        error.message ?? 'Validation error';

      /**
       * Improve required-property message
       */
      if (
        error.keyword === 'required' &&
        error.params &&
        'missingProperty' in error.params
      ) {
        message =
          `missing required property "${error.params.missingProperty}"`;
      }

      /**
       * Improve additional-property message
       */
      if (
        error.keyword ===
          'additionalProperties' &&
        error.params &&
        'additionalProperty' in error.params
      ) {
        message =
          `unknown property "${error.params.additionalProperty}"`;
      }

      console.error(
        `  - ${errorPath} ${message}`,
      );
    }

    return false;
  }

  /**
   * Success
   */
  console.log(`✓ ${relativePath}`);

  return true;
}

/**
 * ---------------------------------------------------------
 * Main
 * ---------------------------------------------------------
 */

function main(): void {
  /**
   * Check docs directory
   */
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(
      `❌ Documentation directory not found: ${DOCS_DIR}`,
    );

    process.exit(1);
  }

  /**
   * Find documents
   */
  const files = getMdxFiles(DOCS_DIR);

  if (files.length === 0) {
    console.error(
      '❌ No MDX documents found.',
    );

    process.exit(1);
  }

  /**
   * Sort for deterministic output
   */
  files.sort();

  console.log('');
  console.log(
    `Validating ${files.length} MDX document(s)...`,
  );
  console.log('');

  let passed = 0;
  let failed = 0;

  /**
   * Validate each document
   */
  for (const file of files) {
    const valid = validateDocument(file);

    if (valid) {
      passed++;
    } else {
      failed++;
    }
  }

  /**
   * Summary
   */
  console.log('');
  console.log('────────────────────────────────────');
  console.log('Documentation validation summary');
  console.log('────────────────────────────────────');

  console.log(
    `Total : ${files.length}`,
  );

  console.log(
    `Passed: ${passed}`,
  );

  console.log(
    `Failed: ${failed}`,
  );

  console.log('');

  /**
   * Final result
   */
  if (failed > 0) {
    console.error(
      '❌ Documentation validation failed.',
    );

    console.error(
      `   ${failed} document(s) need attention.`,
    );

    process.exit(1);
  }

  console.log(
    '✅ Documentation validation passed.',
  );

  console.log(
    `   All ${passed} document(s) are valid.`,
  );
}

main();