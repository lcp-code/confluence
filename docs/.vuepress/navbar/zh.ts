import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  // "/",
  { text: "计算机通用", icon: "creative", link: "/universal/" },
  { text: "前端指南", icon: "creative", link: "/front-end/" },
  { text: "后端指北", icon: "creative", link: "/back-end/" },
  { text: "低码手册", icon: "creative", link: "/lowcode/" },
  "/wall",
  { text: "求职与创业", icon: "creative", link: "/careers/" },
  { text: "项目精选", icon: "creative", link: "/projects/" },
  { text: "书籍精选", icon: "creative", link: "/books/" },
]);
