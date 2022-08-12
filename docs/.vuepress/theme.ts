import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

const site = "https://confluence.uuyang.cn";
const footer = [
  "锤炼高复用编程能力",
  '<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2021048140号-1</a>',
  "MIT Licensed",
  "Copyright © 2022-present 低码汇",
].join(" | ");
export default hopeTheme({
  hostname: site,

  author: {
    name: "低码汇",
    url: site,
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: `/logo.svg`,

  repo: "lcp-code/confluence",

  docsDir: "docs",
  footer,
  copyright: false,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: "低码汇",
    // medias: {
    //   Baidu: "https://example.com",
    //   Bitbucket: "https://example.com",
    //   Dingding: "https://example.com",
    //   Discord: "https://example.com",
    //   Dribbble: "https://example.com",
    //   Email: "https://example.com",
    //   Evernote: "https://example.com",
    //   Facebook: "https://example.com",
    //   Flipboard: "https://example.com",
    //   Gitee: "https://example.com",
    //   GitHub: "https://example.com",
    //   Gitlab: "https://example.com",
    //   Gmail: "https://example.com",
    //   Instagram: "https://example.com",
    //   Lines: "https://example.com",
    //   Linkedin: "https://example.com",
    //   Pinterest: "https://example.com",
    //   Pocket: "https://example.com",
    //   QQ: "https://example.com",
    //   Qzone: "https://example.com",
    //   Reddit: "https://example.com",
    //   Rss: "https://example.com",
    //   Steam: "https://example.com",
    //   Twitter: "https://example.com",
    //   Wechat: "https://example.com",
    //   Weibo: "https://example.com",
    //   Whatsapp: "https://example.com",
    //   Youtube: "https://example.com",
    //   Zhihu: "https://example.com",
    // },
  },
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,
  locales: {
    "/en/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Practicing high reuse programming ability",

      displayFooter: true,

      blog: {
        description: "Where low-code lovers gather",
        intro: "/en/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer,

      displayFooter: true,

      blog: {
        description: "低码爱好者汇集的地方",
        // intro: "/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/en/guide/encrypt.html": ["1234"],
      "/guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "lcp-code/confluence",
      repoId: "R_kgDOHe_7Pg",
      category: "Announcements",
      categoryId: "DIC_kwDOHe_7Ps4CPmqG",
      comment: true,
      mapping: "pathname",
      reactionsEnabled: true,

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },
    feed: {
      json: true,
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    photoSwipe: {
      // logo图片不展开
      selector: ":not(.brand) > img",
    },
    seo: {
      canonical: site,
    },
  },
});
