import { defineUserConfig } from "vuepress";
import theme from "./theme";
import search from "./search";

type IPrefix = undefined | `/${string}/`;
const prefix: IPrefix = process.env.prefix as IPrefix;
const keywords =
  "react、vue、RN、flutter、小程序、node.js、ts、typescript、java、MyBatis、低代码、面试、知识点、前端指南、后端指北、数据库、MySQL、高可用, 高并发、分布式、微服务、serveless";
export default defineUserConfig({
  base: !prefix ? "/" : prefix,
  title: "低码汇",
  description: `涵盖大部分前、后端程序员所需要掌握的核心知识，复用即低码，锤炼高复用编码能力, ${keywords}`,
  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Theme Demo",
    //   description: "A demo for vuepress-theme-hope",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "低码汇",
      description: "低码爱好者汇集的地方",
    },
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content: keywords,
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "robots", content: "all" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    // 百度数据统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?${
          !prefix
            ? "a81ff6bd118b8a1d8b1236512009372c"
            : "4ff37e7c51be38c9c35e418d66b43ab6"
        }";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  theme,
  plugins: [search],
});
