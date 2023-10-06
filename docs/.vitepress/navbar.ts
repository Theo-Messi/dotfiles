// 导航栏设置
export function nav() {
  return [
    { text: "流媒体观影指南", items: NavStreaming() },
    { text: "🔥账号合租平台", items: NavSharing() },
    { text: "科学上网指南", items: NavScientific() },
    { text: "推荐 Netflix 机场", items: NavAirport() },
    { text: "购买服务", items: NavServe() },
    { text: "赞助", link: "https://github.com/sponsors/vanhiupun" },
  ];
}

// 流媒体观影指南
export function NavStreaming() {
  return [
    {
      items: [
        { text: "Netflix", link: "/Streaming/Netflix-01" },
        { text: "Disney+", link: "/Streaming/Disney-01" },
        { text: "Spotify会员", link: "/Streaming/Spotify-01" },
        { text: "YouTube会员", link: "/Streaming/YouTube-01" },
        { text: "Hulu", link: "/Streaming/Hulu-01" },
        { text: "HBO Max", link: "/Streaming/HBO-Max-01" },
      ],
    },
  ];
}

// 🔥账号合租平台
export function NavSharing() {
  return [
    {
      items: [
        { text: "账号合租指南", link: "/Sharing/01" },
        { text: "银河录像局 - AI服务", link: "/Sharing/02" },
        { text: "蜜糖商店 - 流媒体账号", link: "/Sharing/03" },
        { text: "奈飞小铺 - 流媒体账号", link: "/Sharing/04" },
      ],
    },
  ];
}

// 科学上网指南
export function NavScientific() {
  return [
    {
      items: [
        { text: "路由器与客户端选择", link: "/Guide/01" },
        { text: "线路的区别与选择", link: "/Guide/02" },
        { text: "关于机场常用服务器线路的科普", link: "/Guide/03" },
      ],
    },
  ];
}

// 推荐 Netflix 机场
export function NavAirport() {
  return [
    {
      items: [
        { text: "解锁 4K Netflix 机场指南", link: "/vpn/01" },
        { text: "FlyingBird - 飞鸟机场", link: "/vpn/03" },
        { text: "Bridge the Wise", link: "/vpn/04" },
        { text: "一元机场", link: "/vpn/02" },
      ],
    },
  ];
}

// 购买服务
export function NavServe() {
  return [
    {
      // 分组名称
      text: "推荐机场",
      //分组页面
      items: [
        {
          text: "一元机场",
          link: "https://一元机场.click/#/register?code=tFcXfJEuu",
        },
        {
          text: "FlyingBird - 飞鸟机场",
          link: "https://fbaff01.flyb-aff01.com/auth/register?code=RZP3",
        },
        {
          text: "Bridge the Wise",
          link: "https://patriot.ninja/aff.php?aff=1471",
        },
      ],
    },

    {
      // 分组名称
      text: "账号合租平台",
      // 分组页面
      items: [
        {
          text: "银河录像局 - AI服务",
          link: "https://nf.video/kaIuE",
        },
        {
          text: "蜜糖商店 - 流媒体账号",
          link: "https://metshop.vip?referrerUserNo=MTU51076",
        },
        { text: "奈飞小铺 - 流媒体账号", link: "https://ihezu.love/UKTer6" },
      ],
    },
    {
      // 分组名称
      text: "其他服务",
      // 分组页面
      items: [
        {
          text: "SMS 海外接码平台",
          link: "https://sms-activate.org/?ref=8170513",
        },
      ],
    },
  ];
}
