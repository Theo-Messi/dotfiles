import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // 科学上网指南
  '/Scientific/': { base: '/Scientific/', items: Sidebar_Scientific() },
  // 账号合租平台
  '/Sharing/': { base: '/Sharing/', items: Sidebar_Sharing() },
  // 推荐 Netflix 机场
  '/Airport/': { base: '/Airport/', items: Sidebar_Airport() },
  // 流媒体观影指南
  '/Streaming/': { base: '/Streaming/', items: Sidebar_Streaming() }
}

// 流媒体观影指南
export function Sidebar_Streaming() {
  return [
    {
      // 分组名称
      text: 'Netflix 观看指南',
      // 下拉菜单
      collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [
        { text: 'Netflix 介绍', link: 'Netflix-01' },
        { text: 'Netflix 如何看4K及适配硬件', link: 'Netflix-02' },
        { text: 'Netflix 常见使用问题及答案', link: 'Netflix-03' },
        { text: 'Netflix 常见错误提示及解决方案', link: 'Netflix-04' },
        { text: 'Netflix 秘密分类的技巧', link: 'Netflix-05' },
        { text: 'Netflix 全球各国影视剧数量', link: 'Netflix-06' },
        { text: 'Netflix 常用浏览器插件汇总', link: 'Netflix-07' },
        { text: 'Netflix 总结', link: 'Netflix-08' }
      ]
    },
    {
      // 分组名称
      text: 'Disney+ 观看指南',
      // 下拉菜单
      collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [
        { text: 'Disney+ 介绍', link: 'Disney-01' },
        { text: 'Disney+ 订阅指南', link: 'Disney-02' },
        { text: 'Disney+ 合租介绍', link: 'Disney-03' },
        { text: 'Disney+ 会员使用指南', link: 'Disney-04' },
        { text: 'Disney+ 总结与建议', link: 'Disney-05' }
      ]
    },
    {
      // 分组名称
      text: 'Spotify Premium 指南',
      // 下拉菜单
      collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [{ text: 'Spotify Premium 指南', link: 'Spotify-01' }]
    },
    {
      // 分组名称
      text: 'YouTube Premium 会员权益及订阅指南',
      // 下拉菜单
      collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [
        { text: 'YouTube Premium 会员权益及订阅指南', link: 'YouTube-01' }
      ]
    },
    {
      // 分组名称
      text: 'Hulu 国内观看指南',
      // 下拉菜单
      collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [{ text: 'Hulu 国内观看指南', link: 'Hulu-01' }]
    },
    {
      // 分组名称
      text: 'HBO Max 国内观看指南',
      // 下拉菜单
      collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [{ text: 'HBO Max 国内观看指南', link: 'HBO-Max-01' }]
    }
  ]
}

// 账号合租平台
export function Sidebar_Sharing() {
  return [
    {
      // 分组名称
      // text: "账号合租平台",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Sharing/',
      // 分组页面
      items: [
        { text: '账号合租指南', link: '01' },
        { text: '银河录像局 - AI服务', link: '02' },
        { text: '蜜糖商店 - 流媒体账号', link: '03' },
        { text: '奈飞小铺 - 流媒体账号', link: '04' }
      ]
    }
  ]
}

// 科学上网指南
export function Sidebar_Scientific() {
  return [
    {
      // 分组名称
      // text: "科学上网指南",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Scientific/',
      // 分组页面
      items: [
        { text: '路由器与客户端选择', link: '01' },
        { text: '线路的区别与选择', link: '02' },
        { text: '关于机场常用服务器线路的科普', link: '03' }
      ]
    }
  ]
}

// 推荐 Netflix 机场
export function Sidebar_Airport() {
  return [
    {
      // 分组名称
      // text: "推荐机场",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Airport/',
      // 分组页面
      items: [
        { text: '解锁 4K Netflix 机场指南', link: '01' },
        { text: 'FlyingBird - 飞鸟机场', link: '03' },
        { text: 'Bridge the Wise', link: '04' },
        { text: '一元机场', link: '02' }
      ]
    }
  ]
}
