import { defineConfig } from 'vitepress'
import { nav, sidebar, algolia, head } from './configs'

export default defineConfig({
  // 站点名称
  title: '流媒体森林',

  // 站点语言
  lang: 'cn',

  // 站点介绍
  description:
    'Netflix,Disney+,Spotify会员,YouTube会员,HBO MAX,Hulu,Vitepress,Premium,奈飞小铺,蜜糖商店,银河录像局,一元机场,FlyingBird,飞鸟机场,Bridge the Wise,',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: 'src',

  // 网站头部
  head,

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'material-theme-lighter',
      dark: 'material-theme-ocean'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  // true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // 站点地图
  sitemap: {
    hostname: 'https://theovan.wiki',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  themeConfig: {
    // logo
    logo: '/favicon.ico',

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/vanhiupun' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/vanhiupun/wiki/blob/master/docs/src/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    //上次更新
    lastUpdated: { text: '上次更新' },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // algolia搜索
    algolia,

    // 底部信息
    footer: {
      message: 'Released Under The MIT License.',
      copyright:
        'Copyright © 2019 - 2023 <a href="https://github.com/vanhiupun" target="_blank">Theo</a> . All Rights Reserved.'
    }
  }
})
