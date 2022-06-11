import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  // "/zh",
  { text: "计算机通用", icon: "creative", link: "/zh/universal/" },
  { text: "前端指南", icon: "creative", link: "/zh/front-end/" },
  { text: "后端指北", icon: "creative", link: "/zh/back-end/" },
  { text: "低码技术", icon: "creative", link: "/zh/lowcode/" },
  "/zh/wall",
  { text: "求职与创业", icon: "creative", link: "/zh/careers/" },
  { text: "项目精选", icon: "creative", link: "/zh/projects/" },
  { text: "书籍精选", icon: "creative", link: "/zh/books/" },
]);
