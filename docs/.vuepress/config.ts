import { defineUserConfig } from "vuepress";
import theme from "./theme";
import search from "./search";

export default defineUserConfig({
  base: "/",

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

  theme,
  plugins: [search],
});
