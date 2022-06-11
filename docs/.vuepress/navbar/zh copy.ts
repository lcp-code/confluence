import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  // "/zh",
  { text: "计算机通用", icon: "creative", link: "/zh/universal/" },
  { text: "前端指南", icon: "creative", link: "/zh/front-end/" },
  { text: "后端指北", icon: "creative", link: "/zh/back-end/" },
  "/zh/wall",
  { text: "求职与创业", icon: "creative", link: "/zh/careers/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
