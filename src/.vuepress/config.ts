import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dev-ops/nginx/html",
  base: "/",
  lang: "en-US",
  title: "Yang Qi | Resume",
  description: "Bilingual resume and project portfolio of Yang Qi",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "我的简历",
      description: "关于我自己的学习成长经历",
    },
    "/en/": {
      lang: "en-US",
      title: "Yang Qi | Resume",
      description: "Bilingual resume and project portfolio of Yang Qi",
    },
  },

  theme,

});
