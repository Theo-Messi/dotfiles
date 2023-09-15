import { defineConfig } from "vitepress";
import {
  getGuideSidebarZhCN,
  getDeveloperSidebarZhCN,
  getjcSidebarZhCN,
  getCaseSidebarZhCN,
} from "./SidebarZhCN.mjs";
import { nav, navbar } from "./navbar.mjs";

export default defineConfig({
  lang: "zh-CN",
  description:
    "引领您进入五彩斑斓的视听世界，并涵盖了 Netflix 、Disney+ 、Spotify会员 和 YouTube会员 的精彩领域",
  lastUpdated: true,
  cleanUrls: false, // 开启后网址后缀无'html'
  appearance: false,
  //true强制开启深色模式 false强制开启浅色模式
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
  ],

  locales: {
    root: {
      title: "流媒体一站式服务",
      label: "简体中文",
      themeConfig: {
        lastUpdatedText: "上次更新",
        nav:[
          {
            text: "全方位流媒体观影指南",
            items: [
              { text: "Netflix", link: "/Netflix/js" },
              { text: "Disney+", link: "/Disney/js" },
              { text: "Spotify会员", link: "/Spotify/js" },
              { text: "YouTube会员", link: "/youtube/js" },
              { text: "Hulu", link: "/hulu/js" },
              { text: "HBO Max", link: "/hbo/js" },
            ],
          },
          {
            text: "🔥流媒体账号合租",
            link: "/hzpt/hz",
            activeMatch: "^/hzpt/",
          },
          { text: "科学上网指南", link: "/kx/ly", activeMatch: "^/kx/" },
          { text: "推荐机场", link: "/jc/js", activeMatch: "^/jc/" },
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
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    // siteTitle: false, //false去除网站标题 只显示logo
    editLink: {
      pattern: "https://github.com/vanhiupun/wiki/blob/master/docs/:path",
      text: "在GitHub中编辑",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vanhiupun" },
      {
        icon: {
          svg: '<?xml version="1.0" ?><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z"/></svg>',
        },
        link: "https://t.me/vanhiupun",
      },
      {
        icon: {
          svg: '<svg t="1694157827934" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16373" width="200" height="200"><path d="M679.6 876.3h-51.5v-50H422v50h-51.5c-14.2 0-25.8 11.2-25.8 25s11.5 25 25.8 25h309c14.2 0 25.8-11.2 25.8-25s-11.5-25-25.7-25z m128.7-750.2H216c-56.9 0-103 44.8-103 100v350.1h798.3V226.1c0-55.3-46.1-100-103-100zM113 676.2c0 55.2 46.1 100 103 100h592.3c56.9 0 103-44.8 103-100v-50H113v50z"></path></svg>',
        },
        link: "https://theovan.xyz/",
      },
    ],
    footer: {
      message: "Released Under The MIT License.",
      copyright: "Copyright © 2019 - Present Theo",
    },
    // algolia搜索
    search: {
      provider: "algolia",
      options: {
        appId: "TFKQL3PYD7",
        apiKey: "07180615367ee93252015ef2d522ea6f",
        indexName: "theovan",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
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
