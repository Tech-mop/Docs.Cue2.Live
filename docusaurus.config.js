import {themes as prismThemes} from 'prism-react-renderer';
import {CUE2_CURRENT_VERSION} from './src/cue2DocMeta.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cue2 Documentation',
  tagline: 'Multi-platform event playback software',
  favicon: 'img/icon98.png',

  // Site-wide “current” Cue2 line (per-page values live in Markdown front matter).
  customFields: {
    cue2CurrentVersion: CUE2_CURRENT_VERSION,
  },

  // Set the production url of your site here
  url: 'https://docs.cue2.live',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tech-mop', // Usually your GitHub org/user name.
  projectName: 'Docs.Cue2.Live', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Screenshots are filled in later (see docs/meta/image-checklist.md).
  // Keep image warn until assets exist so local/CI builds succeed.
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: 'warn',
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    // Offline full-text search (navbar search box). No Algolia account required.
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        // Docs are served from site root (routeBasePath: '/').
        docsRouteBasePath: '/',
        explicitSearchResultPath: true,
        searchBarShortcutHint: true,
        // Hide meta / maintainer-only noise from the index when possible.
        ignoreFiles: [/\/meta\//],
      }),
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Tech-mop/Docs.Cue2.Live/edit/main/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cue2',
        logo: {
          alt: 'Cue2 Logo',
          src: 'img/Cue2Logo.svg',
          href: 'https://www.cue2.live',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          {
            to: '/tutorials',
            label: 'Tutorials',
            position: 'left',
          },
          {
            to: '/networking/osc-command-reference',
            label: 'OSC Reference',
            position: 'left',
          },
          {
            href: 'https://github.com/Tech-mop/Cue2',
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
              { label: 'Home', to: '/' },
              { label: 'Getting started', to: '/getting-started' },
              { label: 'Tutorials', to: '/tutorials' },
              { label: 'OSC command reference', to: '/networking/osc-command-reference' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Tech-mop/Cue2',
              },
              {
                label: 'Issues',
                href: 'https://github.com/Tech-mop/Cue2/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Cue2 Website',
                href: 'https://www.cue2.live/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Samuel Moxham`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;