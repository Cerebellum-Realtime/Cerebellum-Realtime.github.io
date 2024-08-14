import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Cerebellum",
  tagline: "Cerebellum",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://cerebellum-realtime.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Cerebellum-Realtime", // Usually your GitHub org/user name.
  projectName: "Cerebellum-Realtime.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/cerebellum_transparent.png",
    navbar: {
      title: "Cerebellum",
      logo: {
        alt: "Cerebellum Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/case-study", label: "Case Study", position: "right" },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        {
          to: "/team",
          label: "Team",
          position: "right",
          activeBasePath: "never-active",
        },
        {
          href: "https://github.com/cerebellum-realtime",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Cerebellum Logo",
        src: "img/logo.png",
        width: 100,
        href: "/",
      },
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Case Study",
              to: "/case-study",
            },
            {
              label: "Team",
              to: "/team",
            },
            {
              label: "Docs",
              to: "/docs/Prerequisites",
            },
            {
              label: "Github",
              to: "https://github.com/cerebellum-realtime",
            },
          ],
        },
      ],
      copyright: "Copyright © 2024 Cerebellum",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
