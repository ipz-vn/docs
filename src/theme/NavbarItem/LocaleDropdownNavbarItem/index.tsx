import React, {type ReactNode} from 'react';
import {Globe2} from 'lucide-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from './styles.module.css';

function getLocaleLabel(locale: string): string {
  const labels: Record<string, string> = {
    vi: 'VI',
    en: 'EN',
  };

  return labels[locale] ?? locale.toUpperCase();
}

export default function LocaleDropdownNavbarItem({
  ...props
}: Props): ReactNode {
  const {
    i18n: {currentLocale, locales},
  } = useDocusaurusContext();

  // Chỉ có 2 ngôn ngữ:
  // vi → en
  // en → vi
  const targetLocale = locales.find(
    (locale) => locale !== currentLocale,
  );

  if (!targetLocale) {
    return null;
  }

  const targetPath =
    targetLocale === 'en'
      ? '/en/'
      : '/';

  return (
    <a
      {...props}
      href={targetPath}
      className={styles.languageSwitcher}
      lang={targetLocale}
      title={`Chuyển sang ${getLocaleLabel(targetLocale)}`}
      aria-label={`Chuyển sang ${getLocaleLabel(targetLocale)}`}
    >
      <Globe2
        className={styles.globe}
        size={16}
        strokeWidth={1.8}
        aria-hidden="true"
      />

      <span>
        {getLocaleLabel(targetLocale)}
      </span>
    </a>
  );
}