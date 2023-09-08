import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh-CN",
  description: '',

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https:/theovan.wiki',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))}},

// 网站头
head: [
  ['link', { rel: 'icon', href: '/logo.png' }],
  ['meta', { name: 'theme-color', content: '#12a76b' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'cn' }],
  ['script',{
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': 'AZBRSFGG',
      'data-spa': 'auto',
      defer: ''}]],
  
  locales: {
    root: {
      title: 'Theo',
      label: "简体中文",
      link: "/",
      themeConfig: {
        lastUpdatedText: "上次更新",
        nav: [
          {text: "奈飞观看指南",
            link: "/",
            activeMatch: "^/$|^/Netflix/",},         
          {text: "科学上网指南",
            link: "/kx/index.html",
            activeMatch: "^/kx/",},
          {text: "流媒体合租平台",
            link: "/hzpt/index.html",
            activeMatch: "^/hzpt/",},
          {text: "机场推荐",
            items: [{
                items: [
                   {text: "一元机场",
                    link: "https://一元机场.com/#/register?code=tFcXfJEu",},
                   {text: "CNIX-薯条机场",
                    link: "https://av1.wtf/auth/register?code=vb4p",},
                   {text: "Bridge the Wise",
                    link: "https://patriot.ninja/aff.php?aff=1471", },],
                  },],},],
        sidebar: {
          "/": getGuideSidebarZhCN(),
          "/Netflix/": getGuideSidebarZhCN(),
          "/kx/": getCaseSidebarZhCN(),
          "/hzpt/": getDeveloperSidebarZhCN(),},
      },},},

  themeConfig: {
    logo: "/logo.png",
    siteTitle: false,
    editLink: {
      pattern: "https://github.com/vanhiupun/wiki/blob/master/docs/:path",
      text: "在GitHub中编辑",},
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun/wiki" },
                  { icon:
                     {svg: '<?xml version="1.0" ?><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z"/></svg>'},
                     link: "https://t.me/vanhiupun"},
                  { icon: 
                     {svg:'<svg t="1694157827934" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16373" width="200" height="200"><path d="M679.6 876.3h-51.5v-50H422v50h-51.5c-14.2 0-25.8 11.2-25.8 25s11.5 25 25.8 25h309c14.2 0 25.8-11.2 25.8-25s-11.5-25-25.7-25z m128.7-750.2H216c-56.9 0-103 44.8-103 100v350.1h798.3V226.1c0-55.3-46.1-100-103-100zM113 676.2c0 55.2 46.1 100 103 100h592.3c56.9 0 103-44.8 103-100v-50H113v50z" fill="#9797a0" p-id="16374"></path></svg>' },
                     link:'https://theovan.xyz/'},],
    footer: {
      message: 'Released Under The MIT License.',
      copyright: 'Copyright © 2019 - Present Theo'},
    algolia: {
      appId: "CPGJUDZ25E",
      apiKey: "44611905595e0fc11166ed11b1b48c99",
      indexName: "theo"},},
});

function getGuideSidebarZhCN() {
  return [
    {
      text: "奈飞观看指南",
      items: [
        { text: "奈飞介绍", link: "/Netflix/js.html" },
        { text: "Netflix如何看4K及适配硬件", link: "/Netflix/yj.html" },
        { text: "Netflix 常见使用问题及答案", link: "/Netflix/wt.html" },
        { text: "Netflix 常见错误提示及解决方案", link: "/Netflix/cw.html" },
        { text: "奈飞秘密分类的技巧", link: "/Netflix/dh.html" },],
    },];}

function getCaseSidebarZhCN() {
  return [
    {
      text: "科学上网指南",
      items: [
        { text: "路由器与客户端选择", link: "/kx/ly.html" },
        { text: "线路的区别与选择", link: "/kx/xl.html" },
        { text: "关于机场常用服务器线路的科普", link: "/kx/kp.html" },],
    },];}

function getDeveloperSidebarZhCN() {
  return [
    {
      text: "流媒体合租平台",
      items: [
        { text: "蜜糖商店", link: "/hzpt/mtsd.html" },
        { text: "奈飞小铺", link: "/hzpt/nfxp.html" },],
    },];}