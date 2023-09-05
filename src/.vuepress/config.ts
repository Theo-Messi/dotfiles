import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Wiki",
      description: "暂未定义文档内容",
    },
  },
theme,

});