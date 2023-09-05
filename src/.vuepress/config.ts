import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "文档",
      description: "暂未定义文档内容",
    },
    "/": {
      lang: "en-US",
      title: "Docs",
      description: "The content of the document has not yet been defined",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
