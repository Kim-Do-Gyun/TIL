import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '관점주의',
  tagline: '답이 없는 문제는 없다',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kim-do-gyun.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TIL/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kim-Do-Gyun', // Usually your GitHub org/user name.
  projectName: 'TIL', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko','en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

   plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'philosophy', // 고유 ID
        path: 'philosophy', // 1단계에서 만든 폴더 이름
        routeBasePath: 'philosophy', // URL 경로 (예: /philosophy/intro)
        sidebarPath: './sidebars.ts', // 2단계에서 만든 사이드바 파일
        sidebarCollapsed: false, // 사이드바를 펼친 상태로 시작
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'computer', // 고유 ID
        path: 'computer-engneering', // 1단계에서 만든 폴더 이름
        routeBasePath: 'computer', // URL 경로 (예: /computer/intro)
        sidebarPath: './sidebars.ts',
        sidebarCollapsed: false,
      },
    ],
  ],
  
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
     navbar: {
      title: 'TIL',
      style: 'dark',
      items: [
        // 'Tutorial'을 두 개의 링크로 분리합니다.
        {
           to: '/philosophy/intro', // Philosophy 카테고리 링크
          label: 'Philosophy',
          position: 'left',
        },
        {
           to: '/computer-engneering/intro', // Computer Engineering 카테고리 링크
          label: 'Computer Engineering',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/kim-do-gyun/TIL',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kim-do-gyun',
            },
            {
              label: 'Altruistic Hive',
              href: 'https://github.com/Altruistic-Hive',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
