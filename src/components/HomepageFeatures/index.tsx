import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  image: string;
  description: ReactNode;
  link: string;
};

type TopicItem = {
  title: ReactNode;
  description: ReactNode;
  icon: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.card.products.title">Sản phẩm & Công cụ</Translate>,
    image: require('@site/static/img/technology_ipz.png').default,
    description: (
      <Translate id="homepage.card.products.desc">
        Tài liệu sử dụng, hướng dẫn kỹ thuật và thông tin liên quan đến các sản phẩm, ứng dụng trong hệ sinh thái IPZ.
      </Translate>
    ),
    link: '/products/',
  },
  {
    title: <Translate id="homepage.card.standards.title">Tiêu chuẩn IPZ</Translate>,
    image: require('@site/static/img/standards_ipz.png').default,
    description: (
      <Translate id="homepage.card.standards.desc">
        Các nguyên tắc, tiêu chuẩn và quy định nội bộ được hệ thống hóa nhằm đảm bảo tính nhất quán, chất lượng và khả năng kế thừa.
      </Translate>
    ),
    link: '/standards/',
  },
  {
    title: <Translate id="homepage.card.guides.title">Hướng dẫn & Thực hành</Translate>,
    image: require('@site/static/img/guides_practices_ipz.png').default,
    description: (
      <Translate id="homepage.card.guides.desc">
        Hướng dẫn từng bước giúp người dùng sử dụng công cụ, áp dụng tiêu chuẩn, triển khai giải pháp và thực hiện công việc kỹ thuật.
      </Translate>
    ),
    link: '/guides/',
  },
  {
    title: <Translate id="homepage.card.knowledge.title">Kiến thức & Nghiên cứu</Translate>,
    image: require('@site/static/img/open_knowledge_ipz.png').default,
    description: (
      <Translate id="homepage.card.knowledge.desc">
        Các bài viết chuyên môn, nghiên cứu, phân tích, bài học kinh nghiệm và tài nguyên tri thức được IPZ chia sẻ rộng rãi.
      </Translate>
    ),
    link: '/blog',
  },
];

const TopicList: TopicItem[] = [
  {
    title: <Translate id="homepage.topic.cyber.title">Công nghệ & An ninh số</Translate>,
    description: <Translate id="homepage.topic.cyber.desc">Phần mềm, nền tảng, an toàn thông tin & bảo vệ dữ liệu</Translate>,
    icon: '🛡️',
    link: '/blog/tags/cybersecurity',
  },
  {
    title: <Translate id="homepage.topic.patent.title">Sở hữu trí tuệ</Translate>,
    description: <Translate id="homepage.topic.patent.desc">Xác lập, quản lý, bảo vệ & khai thác tài sản trí tuệ</Translate>,
    icon: '⚖️',
    link: '/blog/tags/intellectual-property',
  },
  {
    title: <Translate id="homepage.topic.bio.title">Tin sinh học</Translate>,
    description: <Translate id="homepage.topic.bio.desc">Dữ liệu & phân tích sinh học phân tử</Translate>,
    icon: '🧬',
    link: '/blog/tags/bioinformatics',
  },
  {
    title: <Translate id="homepage.topic.brand.title">Thương hiệu & Truyền thông</Translate>,
    description: <Translate id="homepage.topic.brand.desc">Xây dựng thương hiệu, nhận diện & truyền thông</Translate>,
    icon: '🎨',
    link: '/blog/tags/brand',
  },
];

function FeatureCardItem({title, image, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--3 margin-bottom--lg')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center">
          <img src={image} className={styles.featureImage} alt="" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        <div className={styles.cardArrowBtn}>
          <span>➔</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        {/* 1. KHÁM PHÁ TÀI LIỆU */}
        <div id="explore" className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.section.explore">KHÁM PHÁ TÀI LIỆU</Translate>
          </Heading>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureCardItem key={idx} {...props} />
          ))}
        </div>

        {/* 2. LĨNH VỰC TRI THỨC */}
        <div className={styles.topicSection}>
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="homepage.section.topics">LĨNH VỰC TRI THỨC</Translate>
            </Heading>
            <p className={styles.sectionSubtitle}>
              <Translate id="homepage.section.topics.desc">Khám phá tài liệu, hướng dẫn và nghiên cứu theo lĩnh vực chuyên môn</Translate>
            </p>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={clsx(styles.topicBarContainer, styles.gridColumns4)}>
            {TopicList.map((topic, idx) => (
              <Link key={idx} to={topic.link} className={styles.topicItemCard}>
                <div className={styles.topicIconCircle}>
                  <span>{topic.icon}</span>
                </div>
                <div className={styles.topicTextContent}>
                  <span className={styles.topicItemTitle}>{topic.title}</span>
                  <span className={styles.topicItemDesc}>{topic.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}