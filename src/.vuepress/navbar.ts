import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/md/resume",
  {
    text: "OpenAI开发日志",
    icon: "book",
    link: "/md/dev-log/",
  },
  {
    text: "实习日志",
    icon: "book",
    link: "/md/study-log/",
  },
]);

export const enNavbar = navbar([
  "/en/",
  "/en/md/resume",
  {
    text: "OpenAI Log",
    icon: "book",
    link: "/en/md/dev-log/",
  },
  {
    text: "Internship Log",
    icon: "book",
    link: "/en/md/study-log/",
  },
]);
