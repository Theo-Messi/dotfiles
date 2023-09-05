import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Contact information",
    icon: "lightbulb",
    prefix: "/Contact-information/",
    children: ["Contact-information"],
  },
]);
