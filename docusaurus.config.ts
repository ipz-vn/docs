import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IPZ Docs',
  tagline: 'Cổng Tri thức, Tiêu chuẩn & Tài liệu IPZ',
  favicon: 'img/ipz.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ipz.vn',
  baseUrl: '/',

  organizationName: 'IPZ',
  projectName: 'docs-ipz',

  onBrokenLinks: 'warn', 

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        label: 'Vi',
        direction: 'ltr',
        htmlLang: 'vi-VN',
      },
      en: {
        label: 'En',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  markdown: {
    format: 'mdx',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs', 
          routeBasePath: '/', 
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ipz-vn/docs-ipz/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/ipz-vn/docs-ipz/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-125EHCFQHQ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Plugin tìm kiếm Local
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['vi', 'en'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IPZ Docs',
      logo: {
        alt: 'IPZ Logo',
        src: 'img/ipz.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'productsSidebar',
          label: 'Sản phẩm & Công cụ', 
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'standardsSidebar',
          label: 'Tiêu chuẩn',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          label: 'Hướng dẫn',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Tri thức',
          position: 'left',
          items: [
            { label: 'Kho tri thức', to: '/blog' },
            { label: 'Bài viết chuyên môn', to: '/blog/tags/expertise' },
            { label: 'Nghiên cứu & R&D', to: '/blog/tags/research' },
            { label: 'Kinh nghiệm & Thực tiễn', to: '/blog/tags/practice' },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right', 
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Khám phá',
          items: [
            { label: 'Sản phẩm & Công cụ', to: '/products' },
            { label: 'Tiêu chuẩn công khai', to: '/standards' },
            { label: 'Hướng dẫn & Thực hành', to: '/guides' },
            { label: 'Kiến thức & Nghiên cứu', to: '/blog' },
          ],
        },
        {
          title: 'Về IPZ',
          items: [
            { label: 'ipz.vn', href: 'https://ipz.vn' },
            { label: 'Sứ mệnh & Tầm nhìn', href: 'https://ipz.vn/mission' },
            { label: 'Hệ sinh thái IPZ', href: 'https://ipz.vn/ecosystem' },
          ],
        },
        {
          title: 'Kết nối',
          items: [
            { label: 'GitHub', href: 'https://github.com/ipz-vn' },
            { label: 'Facebook', href: 'https://facebook.com/ipz.vn' },
            { label: 'YouTube', href: 'https://youtube.com/@ipz-vn' },
          ],
        },
        {
          title: 'Pháp lý & Liên hệ',
          items: [
            { label: 'info@ipz.vn', href: 'mailto:info@ipz.vn' },
            { label: 'Security', href: 'https://ipz.vn/legal/security' },
            { label: 'Terms', href: 'https://ipz.vn/legal/terms' },
            { label: 'Privacy', href: 'https://ipz.vn/legal/privacy' },
          ],
        },
      ],
      copyright: `IPZ · Digital Trust Ecosystem · © ${new Date().getFullYear()} IPZ. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;