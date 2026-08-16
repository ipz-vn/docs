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
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={clsx('row', styles.heroRow)}>
          {/* Cột trái: Văn bản & Nút bấm */}
          <div className="col col--6">
            <div className={styles.heroContent}>
              <Heading as="h1" className={styles.heroTitle}>
                <span className={styles.heroBrand}>IPZ</span> Docs
              </Heading>
              
              <p className={styles.heroSubtitle}>
                <Translate id="homepage.hero.subtitle">
                  Cổng Tri thức, Tiêu chuẩn & Tài liệu của hệ sinh thái IPZ
                </Translate>
              </p>
              
              <p className={styles.heroDescription}>
                <Translate id="homepage.hero.desc">
                  IPZ Docs là cổng tri thức và tài liệu công khai của hệ sinh thái IPZ. Nơi tập trung tài liệu sản phẩm, tiêu chuẩn công khai, hướng dẫn thực hành và những kiến thức, nghiên cứu được IPZ chọn lọc để chia sẻ.
                </Translate>
              </p>
              
              <div className={styles.heroButtons}>
                <a
                  className="button button--primary button--lg"
                  href="#explore">
                  📖 <Translate id="homepage.hero.cta_primary">Tra cứu tài liệu</Translate>
                </a>
                <Link
                  className="button button--outline button--primary button--lg"
                  to="/standards/">
                  🛡️ <Translate id="homepage.hero.cta_secondary">Tiêu chuẩn công khai</Translate>
                </Link>
              </div>
            </div>
          </div>

          {/* Cột phải: Hình minh họa Hero */}
          <div className="col col--6 text--center">
            <img 
              src={require('@site/static/img/banner_docs_ipz.png').default} 
              className={styles.heroImage} 
              alt="IPZ Docs Hero Illustration" 
            />
          </div>
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
      description="Cổng Tri thức, Tiêu chuẩn & Tài liệu chính thức của Hệ sinh thái IPZ.">
      <HomepageHeader />
      <main>
        {/* Đã loại bỏ thẻ <AboutSection /> tại đây */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}