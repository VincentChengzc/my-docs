import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
export default {
  title: ".Cheng的文档小站", // 网页左上角标题
  description: "记录一些笔记.",
  titleTemplate: "余生很短", // 页签右标题
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
    sidebar: [
      {
        text: "文档",
        items: [
          { text: "git命令行备忘", link: "/blog/git命令行备忘" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "留白",
        items: [{ text: "暂无", link: "/暂无" }],
      },
    ],
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Echo.Cheng",
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
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path:"./docs"
      })
    ]
  },
};
