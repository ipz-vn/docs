import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IPZ Digital Solutions',
  tagline: 'Chuyển hóa dữ liệu thành giá trị',
  favicon: 'img/ipz.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ipz.vn',
  baseUrl: '/',

  organizationName: 'dzokha',
  projectName: 'docs-ipz',

  onBrokenLinks: 'warn', // Thay vì 'throw'
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  markdown: {
    format: 'mdx',
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs', // Đảm bảo bạn đã di chuyển tất cả folder vào thư mục 'docs'
          routeBasePath: '/', // URL sẽ là /soft/intro thay vì /docs/soft/intro
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dzokha/docs-ipz/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/dzokha/docs-ipz/tree/main/',
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'soft', // Định danh duy nhất
        path: 'soft', // Tên thư mục chứa nội dung
        routeBasePath: 'soft', // Đường dẫn URL sẽ là /soft
        sidebarPath: './sidebarsSoft.ts', // Đường dẫn file sidebar
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
        alt: 'IPZ Digital Logo',
        src: 'img/ipz.png',
      },
      items: [
        {
          label: 'Công cụ', // Thể hiện tinh thần chia sẻ với cộng đồng
          to: '/soft/intro',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Giải pháp số',
          position: 'left',
          items: [
            { 
              type: 'docSidebar', 
              sidebarId: 'cyberSidebar', 
              label: 'Bảo mật & An ninh mạng' 
            },
            { 
              type: 'docSidebar', 
              sidebarId: 'ipSidebar', 
              label: 'Bảo hộ Sở hữu trí tuệ' 
            },
            { 
              type: 'docSidebar', 
              sidebarId: 'brandSidebar', 
              label: 'Phát triển Thương hiệu' 
            },
            { 
              type: 'docSidebar', 
              sidebarId: 'bioSidebar', 
              label: 'Ứng dụng Tin sinh học' 
            },
          ],
        },
        {
          type: 'dropdown', // Biến Blog thành nơi phân loại bài viết công bố
          label: 'Truyền thông & Blog', 
          position: 'left',
          items: [
            { label: 'Tất cả tài liệu chia sẻ', to: '/blog' },
            { label: 'Kinh nghiệm Bảo mật mạng', to: '/blog/tags/cybersecurity' },
            { label: 'Giải pháp Thương hiệu', to: '/blog/tags/brand' },
            { label: 'Tư vấn Sáng chế & IP', to: '/blog/tags/patent' },
            { label: 'Kiến thức Tin sinh học', to: '/blog/tags/bioinformatics' },
            
          ],
        },
        {
          href: 'https://ipz.vn',
          label: 'Liên hệ IPZ',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Hệ thống Tri thức',
          items: [
            { label: 'Tài nguyên công nghệ', to: '/soft/intro' },
            { label: 'Giải pháp số', to: '/cyber' },
            { label: 'Cẩm nang chia sẻ', to: '/blog' },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            { label: 'Facebook kết nối', href: 'https://facebook.com/ipz.vn' },
            { label: 'Kênh Youtube chia sẻ', href: 'https://youtube.com/@ipz-vn' },
            { label: 'Website chính thức', href: 'https://ipz.vn' },
          ],
        },
        {
          title: 'Văn phòng Hỗ trợ',
          items: [
            { label: 'IPZ Digital Solutions', href: 'https://ipz.vn' },
            { label: 'Cái Nước, Cà Mau, Việt Nam', href: 'https://maps.app.goo.gl/kKMTGoRxBH1CLGbz9' },
            { label: 'Email: info@ipz.vn', href: 'mailto:info@ipz.vn' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IPZ Digital Solutions.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;