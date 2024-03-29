import AutoConfigureNavSidebarPlugin from '@w3ctech-editorial-department/vitepress-auto-configure-nav-sidebar'
const { nav, sidebar } = AutoConfigureNavSidebarPlugin({
  collapsed: true,
  showNavIcon: true,
  singleLayerNav: true,
  showSidebarIcon: true,
  ignoreFolders: ['.vuepress','image','隐藏'], // 需要排除的目录
  ignoreFiles: [],// 需要排除的文件
})
export default {
  title: "Echo's文档小站", // 网页左上角标题
  description: "记录一些笔记.",
  titleTemplate: "余生很短", // 页签右标题
  base: "/my-docs/",
  lastUpdated: true, // 最后更新时间
  themeConfig: {
    nav,
    sidebar,
    algolia: {
      appId: 'KMOFRUJNBO',
      apiKey: '2a59e200ea8b8a0f7ec21f58ecbb16b3',
      indexName: 'vincentchengzc'
      // searchParameters: {
      //     facetFilters: ['tags:guide,api']
      // }
    },
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
    socialLinks: [{ icon: "github", link: "https://github.com/VincentChengzc" }],
  },
  vite: {
    plugins: [
      // add plugin
    ],
    server: {
    // 配置可以IP访问
    host: '0.0.0.0',
    // 本地服务的端口号
    port: 8888,
    // 启动时，自动在浏览器中打开应用程序。当该值为字符串时，它将被用作 URL 的路径名
    open: true, // 是否自动打开浏览器
    }
  },
};
