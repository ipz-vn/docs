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
    // Di chuyển thuộc tính này vào đây để sẵn sàng cho Docusaurus v4:
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  
  onBrokenLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs', 
          routeBasePath: '/', 
          sidebarPath: './sidebarsDocs.ts',
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
    // Instance Docs thứ 2 dành cho Products
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'products', 
        path: 'products', 
        routeBasePath: 'products', 
        sidebarPath: './sidebarsProducts.ts', 
      },
    ],
    // Plugin tìm kiếm Local chính thức đặt tại đây
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
          label: 'Sản phẩm & Công cụ', 
          to: '/products/',
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
          label: 'Kiến thức & Blog', 
          position: 'left',
          items: [
            { label: 'Tất cả tài liệu chia sẻ', to: '/blog' },
            { label: 'An ninh mạng', to: '/blog/tags/cybersecurity' },
            { label: 'Sở hữu trí tuệ', to: '/blog/tags/brand' },
            { label: 'Thương hiệu', to: '/blog/tags/patent' },
            { label: 'Tin sinh học', to: '/blog/tags/bioinformatics' },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right', 
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sản phẩm & Công cụ',
          items: [
            { label: 'IPZ Verify', to: '/products/ipz-verify' },
            { label: 'BiomeIPZ', to: '/products/biomeipz' },
            { label: 'Thư viện & Công cụ', to: '/products/tools' },
            { label: 'Tất cả sản phẩm', to: '/products/' },
          ],
        },
        {
          title: 'Tài liệu & Tri thức',
          items: [
            { label: 'Tiêu chuẩn', to: '/standards/' },
            { label: 'Hướng dẫn', to: '/guides/' },
            { label: 'Kiến thức & Blog', to: '/blog' },
            { label: 'Nghiên cứu & R&D', to: '/blog/tags/cybersecurity' },
          ],
        },
        {
          title: 'IPZ & Cộng đồng',
          items: [
            { label: 'Về IPZ', href: 'https://ipz.vn' },
            { label: 'GitHub', href: 'https://github.com/ipz-vn' },
            { label: 'Facebook', href: 'https://facebook.com/ipz.vn' },
            { label: 'YouTube', href: 'https://youtube.com/@ipz-vn' },
          ],
        },
        {
          title: 'Pháp lý & Liên hệ',
          items: [
            { label: 'Liên hệ: info@ipz.vn', href: 'mailto:info@ipz.vn' },
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Use', to: '/terms' },
            { label: 'Security', to: '/security' },
          ],
        },
      ],
      copyright: `📍 Cái Nước, Cà Mau, Việt Nam<br/>Copyright © ${new Date().getFullYear()} IPZ. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;