// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' IA na Docência',
  favicon: 'img/logo-nte.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'NTE', 
  projectName: 'ia-na-docencia', 
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en', 'pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
         
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      navbar: {
        title: '',
        logo: {
          alt: 'NTE Logo',
          src: 'img/logo-nte.png',
          width: 135,
        },
        items: [
          {
            type: 'doc',
            docId: 'entendendo-ia/index',
            position: 'right',
            label: 'Entendendo a IA',
          },
          {
            type: 'doc',
            docId: 'legislacao/index',
            position: 'right',
            label: 'Leis & Diretrizes',
          },
          {
            type: 'doc',
            docId: 'prompts/index',
            position: 'right',
            label: 'Prompts & usos',
          },
          {
          type: 'doc',
          docId: 'rag/index',
          position: 'right',
          label: 'RAG',
          },
          {
          to: '/',
          label: 'Login',
          position: 'right',
          className: 'nav-login-button', 
          },
        ],
      },
      footer: {
        copyright: `
          <div class="footer-logos-container">
            <!-- Troque os nomes abaixo pelos nomes reais das suas imagens na pasta static/img -->
            <img src="/img/logo-nte.png" alt="Logo NTE" />
            <img src="/img/logo-sept.png" alt="Logo SEPT" />
            <img src="/img/logo-ufpr.png" alt="Logo UFPR" />
          </div>
          Copyright © ${new Date().getFullYear()} NTE - Núcleo de Tecnologia Educacional, Inc. Built with Docusaurus.
        `,
      },
    }),
};

export default config;
