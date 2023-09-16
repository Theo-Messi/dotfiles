import { defineConfig } from "vitepress";
import {
  getGuideSidebarZhCN,
  getDeveloperSidebarZhCN,
  getjcSidebarZhCN,
  getCaseSidebarZhCN,
} from "./Sidebar.mjs";
import { hz, lmt, kx, jc, fw } from "./navbar.mjs";

export default defineConfig({
  lang: "zh-CN",
  description:
    "引领您进入五彩斑斓的视听世界，并涵盖了 Netflix 、Disney+ 、Spotify会员 和 YouTube会员 的精彩领域",
  lastUpdated: true,
  cleanUrls: false, // 开启后网址后缀无'html'
  appearance: false, //true强制开启深色模式 false强制开启浅色模式
  base: "/",
  sitemap: {
    hostname: "https:/theovan.wiki",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  // 网站头
  head: [
    ["link", { rel: "icon", href: "/logo-light.svg" }],
    ["meta", { name: "og:locale", content: "cn" }],
    ["script", {}, `document.documentElement.classList.add('dark')`], //强制开启为深色模式
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "AZBRSFGG",
        "data-spa": "auto",
        defer: "",
      },
    ],
    [//谷歌分析
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-5ZXYVJQV7V' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5ZXYVJQV7V');`
    ]
  ],

  locales: {
    root: {
      title: "流媒体一站式服务",
      label: "简体中文",
      themeConfig: {
        lastUpdatedText: "上次更新",
        nav: [
          { text: "全方位流媒体观影指南", items: lmt() },
          { text: "🔥流媒体账号合租", items: hz() },
          { text: "科学上网指南", items: kx() },
          { text: "推荐 Netflix 机场", items: jc() },
          { text: "购买服务", items: fw() },
        ],

        sidebar: {
          "/": { base: "/", items: getGuideSidebarZhCN() },
          "/Netflix/": { base: "/Netflix/", items: getGuideSidebarZhCN() },
          "/kx/": { base: "/kx/", items: getCaseSidebarZhCN() },
          "/hzpt/": { base: "/hzpt/", items: getDeveloperSidebarZhCN() },
          "/jc/": { base: "/jc/", items: getjcSidebarZhCN() },
        },
      },
    },
  },

  themeConfig: {
    logo: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
    //  siteTitle: false, //false去除网站标题 只显示logo
    editLink: {
      pattern: "https://github.com/vanhiupun/wiki/blob/master/docs/:path",
      text: "在GitHub中编辑",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }],
    footer: {
      message: "Released Under The MIT License.",
      copyright: 'Copyright © 2019 - Present <a href="https://github.com/vanhiupun">Theo</a>',
    },
    // algolia搜索
    search: {
      provider: "algolia",
      options: {
        appId: "TFKQL3PYD7",
        apiKey: "07180615367ee93252015ef2d522ea6f",
        indexName: "theovan",
        placeholder: "搜索",
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
  },
});
