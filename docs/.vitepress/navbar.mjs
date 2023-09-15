export function nav() {
    return [
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
    ]}