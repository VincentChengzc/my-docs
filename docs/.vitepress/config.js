export default {
  title: ".Cheng的文档小站", // 网页左上角标题
  description: "记录一些笔记.",
  titleTemplate: "天秤的异端", // 页签右标题
  base: "/vite-press/",
  lastUpdated: true, // 最后更新时间
  themeConfig: {
    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blog/home" },
      { text: "短文", link: "/essay/home" },
      { text: "闲谈", link: "/chat/home" },
    ],
    // 侧边栏
    sidebar: {
      "/blog/": [
        { text: "简述", link: "/blog/home" },
        {
          text: "Taro CI持续集成框架的配置与使用",
          link: "/blog/TaroCI持续集成框架的配置与使用/page",
        },
        { text: "如何搭建VitePress", link: "/blog/如何搭建VitePress/page" },
        {
          text: "使用Github Pages部署静态页面",
          link: "/blog/使用GithubPages部署静态页面/page",
        },
      ],
      "/essay/": [
        { text: "简述", link: "/essay/home" },
        {
          text: "如何快速完成Microsoft Rewards积分任务",
          link: "/essay/如何快速完成MicrosoftRewards积分任务/page",
        },
      ],
      "/chat/": [
        { text: "简述", link: "/chat/home" },
        { text: "书架", link: "/chat/书架/page" },
      ],
    },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Echo.Cheng",
    },
    // 搜索框
    search: {
      provider: "local",
    },
    // 自定义更新时间头
    lastUpdatedText: "最后更新时间",
    // 右上角社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/LibraHeresy" }],
  },
};
