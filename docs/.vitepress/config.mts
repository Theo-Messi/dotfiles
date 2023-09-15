import { defineConfig } from "vitepress";
import * as SidebarMjs from "./Sidebar.mjs";
import * as navbarMjs from "./navbar.mjs";

export default defineConfig({
  description:
    "引领您进入五彩斑斓的视听世界，并涵盖了 Netflix 、Disney+ 、Spotify会员 和 YouTube会员 的精彩领域",
  lastUpdated: true,
  cleanUrls: true, // 开启后网址后缀无'html'
  // appearance: false,  //true强制开启深色模式 false强制开启浅色模式

  sitemap: {
    // ------------站点地图-------------
    hostname: "https://theovan.wiki",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  // markdown
  markdown: {
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-ocean",
    },
    // lineNumbers: true,
  },

  // 网站头
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // ["script", {}, `document.documentElement.classList.add('dark')`],    //强制开启为深色模式
    [
      //谷歌分析
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

  locales: {
    root: {
      title: "流媒体森林",
      label: "中文",
      lang: "cn",
    },
  },

  themeConfig: {
    logo: { light: "/favicon.ico", dark: "/favicon.ico" }, // logo
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }], // 社交链接
    //  siteTitle: false,    false去除网站标题 只显示logo
    editLink: {
      // GitHub编辑页面
      pattern: "https://github.com/vanhiupun/wiki/blob/master/docs/:path",
      text: "为此页提供修改建议",
    },

    outline: { label: "本页目录" }, //目录
    lastUpdated: { text: "上次更新" }, //上次更新
    nav: navbarMjs.nav(), // 导航栏

    sidebar: {
      // 侧边栏
      "/": { base: "/", items: SidebarMjs.SidebarStreaming() },
      "/Guide/": { base: "/Guide/", items: SidebarMjs.SidebarScientific() },
      "/Sharing/": { base: "/Sharing/", items: SidebarMjs.SidebarSharing() },
      "/vpn/": { base: "/vpn/", items: SidebarMjs.SidebarAirport() },
      "/Streaming/": {
        base: "/Streaming/",
        items: SidebarMjs.SidebarStreaming(),
      },
    },

    search: {
      // algolia搜索
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

    footer: {
      // 底部信息
      message: "Released Under The MIT License.",
      copyright:
        'Copyright © 2019 - Present <a href="https://github.com/vanhiupun">Theo</a>',
    },
  },
});
