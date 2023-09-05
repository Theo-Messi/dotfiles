import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // "/",
  "/demo/",
  //下拉菜单
  {
    text: "联系方式",
    icon: "fa-solid fa-envelopes-bulk",
    children: 
    [
      {
        text: "Github",
        icon: "fa-brands fa-github",
        link: "https://github.com/vanhiupun",
      },
      {
        text: "Telegram",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/vanhiupun",
      },
    ],
  },
//单独页面
{
  text: "请我喝咖啡",
  icon: "fa-brands fa-paypal",
  link: "https://paypal.me/vanhiupunhk",
},

]);