import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Tiêu đề chính */}
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.hero.title">IPZ Docs</Translate>
        </Heading>
        
        {/* Tagline / Subtitle */}
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            Cổng Tri thức, Tiêu chuẩn & Tài liệu IPZ
          </Translate>
        </p>
        
        {/* Cụm nút bấm hành động */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/products/">
            <Translate id="homepage.hero.cta_primary">Khám phá Sản phẩm & Công cụ</Translate>
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/standards/">
            <Translate id="homepage.hero.cta_secondary">Tra cứu tiêu chuẩn</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Single Source of Truth cho toàn bộ Hiến chương, Tiêu chuẩn, Hạ tầng Dữ liệu & Tri thức IPZ.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}