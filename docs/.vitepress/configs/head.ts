import type { HeadConfig } from "vitepress";

const isDevelopment = process.env.NODE_ENV === "development";

export const head: HeadConfig[] = [
  // LOGO
  ["link", { rel: "icon", href: "https://theovan.wiki/favicon.ico" }],

  //强制开启为深色模式
  // ["script", {}, `document.documentElement.classList.add('dark')`],

  //谷歌分析
  [
    "script",
    {
      async: "",
      src: "https://www.googletagmanager.com/gtag/js?id=G-5ZXYVJQV7V",
    },
  ],
  [
    "script",
    {},
    `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5ZXYVJQV7V');`,
  ],
];
