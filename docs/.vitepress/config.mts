import { defineConfig } from "vitepress";
import * as Sidebar from "./Sidebar.js";
import * as navbar from "./navbar.js";

export default defineConfig({
  // 站点名称
  title: "流媒体森林",

  // 站点语言
  lang: "cn",

  // 站点介绍
  description:
    "Netflix,Disney+,Spotify会员,YouTube会员,HBO MAX,Hulu,Vitepress,Premium,奈飞小铺,蜜糖商店,银河录像局,一元机场,FlyingBird,飞鸟机场,Bridge the Wise,",

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: "src",

  // markdown-it插件配置
  markdown: {
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-ocean",
    },
  },

  //true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // -站点地图
  sitemap: {
    hostname: "https://theovan.wiki",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  // 网站头
  head: [
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
  ],

  themeConfig: {
    // logo
    logo: "/favicon.ico",

    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: "https://github.com/vanhiupun/wiki/blob/master/docs/src/:path",
      text: "为此页提供修改建议",
    },

    // 目录设置
    outline: "deep", // 索引级别
    outlineTitle: "目录", // 目录文本

    //上次更新
    lastUpdated: { text: "上次更新" },

    // 导航栏
    nav: navbar.nav(),

    // 侧边栏
    sidebar: {
      // 科学上网指南
      "/Guide/": { base: "/Guide/", items: Sidebar.SidebarScientific() },
      // 账号合租平台
      "/Sharing/": { base: "/Sharing/", items: Sidebar.SidebarSharing() },
      // 推荐 Netflix 机场
      "/vpn/": { base: "/vpn/", items: Sidebar.SidebarAirport() },
      // 流媒体观影指南
      "/Streaming/": {
        base: "/Streaming/",
        items: Sidebar.SidebarStreaming(),
      },
    },

    // 底部信息
    footer: {
      message: "Released Under The MIT License.",
      copyright:
        'Copyright © 2019 - 2023 <a href="https://github.com/vanhiupun" target="_blank">Theo</a> . All Rights Reserved.',
    },

    // algolia搜索
    search: {
      provider: "algolia",
      options: {
        appId: "TFKQL3PYD7",
        apiKey: "07180615367ee93252015ef2d522ea6f",
        indexName: "theovan",
        locales: {
          root: {
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
    },
  },
});
