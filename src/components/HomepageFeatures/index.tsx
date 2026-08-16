import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.tech.title">Công nghệ & R&D</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="homepage.features.tech.description">
        Công nghệ, kiến trúc, nghiên cứu và giải pháp kỹ thuật của IPZ.
      </Translate>
    ),
    link: '/products/',
  },
  {
    title: <Translate id="homepage.features.trust.title">Sở hữu trí tuệ & Digital Trust</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="homepage.features.trust.description">
        Tri thức về sở hữu trí tuệ, tài sản tri thức và xây dựng niềm tin số.
      </Translate>
    ),
    link: '/blog/tags/brand',
  },
  {
    title: <Translate id="homepage.features.open.title">Tri thức & Mã nguồn Mở</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="homepage.features.open.description">
        Thư viện, tài nguyên kỹ thuật, hướng dẫn và những tri thức được IPZ chia sẻ với cộng đồng.
      </Translate>
    ),
    link: '/blog',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}