import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cue2 Documentation',
  tagline: 'Multi-platform event playback software',
  favicon: 'img/icon98.png',

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
  onBrokenMarkdownLinks: 'warn',

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
            label: 'Docs Home',
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
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
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