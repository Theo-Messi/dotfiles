import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,
  lang: 'zh-CN',
  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Theo',
      description: '文档分享',
      link: '/',
      themeConfig: {
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/vanhiupun/wiki/edit/main/docs/:path',
          text: '在GitHub中编辑',
        },
        nav: [
          {
            text: '奈飞观看指南',
            link: '/',
            activeMatch: '^/$|^/Netflix/'
          },
          {
            text: '科学上网指南',
            link: '/kx/index.html',
            activeMatch: '^/kx/'
          },
          {
            text: '流媒体合租平台',
            link: '/hzpt/index.html',
            activeMatch: '^/hzpt/'
          }
        ],
        sidebar: {
          '/': getGuideSidebarZhCN(),
          '/Netflix/': getGuideSidebarZhCN(),
          '/kx/': getCaseSidebarZhCN(),
          '/hzpt/': getDeveloperSidebarZhCN(),
        }
      }
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vanhiupun/wiki' }
    ],

    footer: {
      message: 'This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License',
      copyright: 'Copyright © 2022-present Theo'
    }
  }
})

function getGuideSidebarZhCN() {
  return [
    {
      text: '奈飞观看指南',
      items: [
        { text: '奈飞介绍', link: '/Netflix/js.html' },
        { text: 'Netflix如何看4K及适配硬件', link: '/Netflix/yj.html' },
        { text: 'Netflix 常见使用问题及答案', link: '/Netflix/wt.html' },
        { text: 'Netflix 常见错误提示及解决方案', link: '/Netflix/cw.html' },
        { text: '奈飞秘密分类的技巧', link: '/Netflix/dh.html' },

      ]
    },
  ]
}

function getCaseSidebarZhCN() {
  return [
    {
      text: '科学上网指南',
      items: [
        { text: '路由器与客户端选择', link: '/kx/ly.html' },
        { text: '线路的区别与选择', link: '/kx/xl.html' },
        { text: '关于机场常用服务器线路的科普', link: '/kx/kp.html' },
      ]
      },
    ]
  }


function getDeveloperSidebarZhCN() {
  return [
    {
      text: '流媒体合租平台',
      items: [
        { text: '蜜糖商店', link: '/hzpt/mtsd.html' },
        { text: '奈飞小铺', link: '/hzpt/nfxp.html' }
      ]
    }
  ]
}
