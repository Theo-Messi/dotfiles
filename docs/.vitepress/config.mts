import { defineConfig } from "vitepress";
import * as Sidebar from "./Sidebar.js";
import * as navbar from "./navbar.js";

export default defineConfig({
  title: "流媒体森林",
  lang: "cn",
  description:
    "Netflix,Disney+,Spotify会员,YouTube会员,HBO MAX,Hulu,Vitepress,Premium,奈飞小铺,蜜糖商店,银河录像局,一元机场,FlyingBird,飞鸟机场,Bridge the Wise,",
  lastUpdated: true,
  cleanUrls: true, // 开启后网址后缀无'html'
  srcDir: "src",
  // appearance: false,  //true强制开启深色模式 false强制开启浅色模式
  vite: {
    ssr: { noExternal: ["@nolebase/vitepress-plugin-enhanced-readabilities"] },
  },

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
    ["link", { rel: "icon", href: "https://theovan.wiki/favicon.ico" }],
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

  themeConfig: {
    logo: "/favicon.ico", // logo
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }], // 社交链接
    //  siteTitle: false,    false去除网站标题 只显示logo
    editLink: {
      // GitHub编辑页面
      pattern: "https://github.com/vanhiupun/wiki/blob/master/docs/src/:path",
      text: "为此页提供修改建议",
    },

    outline: { label: "本页目录" }, //目录
    lastUpdated: { text: "上次更新" }, //上次更新
    nav: navbar.nav(), // 导航栏

    sidebar: {
      // 侧边栏
      "/": { base: "/", items: Sidebar.SidebarStreaming() },
      "/Guide/": { base: "/Guide/", items: Sidebar.SidebarScientific() },
      "/Sharing/": { base: "/Sharing/", items: Sidebar.SidebarSharing() },
      "/vpn/": { base: "/vpn/", items: Sidebar.SidebarAirport() },
      "/Streaming/": {
        base: "/Streaming/",
        items: Sidebar.SidebarStreaming(),
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
        'Copyright © 2019 - 2023 <a href="https://github.com/vanhiupun" target="_blank">Theo</a> . All Rights Reserved.',
    },
  },
});
