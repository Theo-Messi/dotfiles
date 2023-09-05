import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "联系方式",
    icon: "lightbulb",
    prefix: "/zh/Contact-information/",
    children: ["Contact-information"],
  },
]);