
module.exports = {
  title: '卢卢 de 前端加油站',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: 'csdn博客', link: 'https://blog.csdn.net/lu123ying' }
    ],
    sidebar: [
      {
        title: 'HTMLCSS基础',
        collapsable: true,
        children: [
          ['/blog/01-HTMLCSS/01-HTML基础','HTML基础'],
          ['/blog/02-CSS/01-CSS总结','CSS总结'],
          ['/blog/03-移动WEB相关/01-HTML5CSS3','HTML5CSS3'],
          ['/blog/03-移动WEB相关/02-移动web开发-布局','移动web开发-布局'],
        ]
      },
      {
        title: 'JS基础',
        collapsable: true,
        children: [
          ['/blog/04-JS/JavaScript基础笔记','JavaScript基础'],
          ['/blog/04-JS/WebAPIs','WebAPI'],
          ['/blog/04-JS/JavaScript高级笔记','JavaScript高级笔记'],
          ['/blog/04-JS/ES6基础笔记','ES6基础笔记'],
        ]
      },
      {
        title: 'JQuery',
        collapsable: true,
        children: [
          ['/blog/05-jquery/jQuery','jQuery基础'],
        ]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          ['/blog/06-vue/day0-1-promise等同步异步任务相关','01-promise等同步异步任务相关'],
          ['/blog/06-vue/Day01_webpack','02-webpack基础'],
          ['/blog/06-vue/day0-2-vue基础','03-vue基础'],
          ['/blog/06-vue/Day02_vue脚手架_基础API','04-vue脚手架_基础API'],
          ['/blog/06-vue/Day03_基础API_计算属性_过滤器_侦听器_品牌管理案例','05-基础API_计算属性_过滤器_侦听器'],
          ['/blog/06-vue/Day04_vue组件_组件通信_todo案例','06-组件通信'],
          ['/blog/06-vue/Day05_生命周期_组件进阶','07-生命周期_组件进阶'],
          ['/blog/06-vue/Day06_动态组件_插槽_自定义指令_tabbar案例','08-动态组件_插槽_自定义指令'],
          ['/blog/06-vue/Day07_路由_vant组件库使用','09-路由_vant组件库使用'],
          ['/blog/06-vue/核心问题','10-核心问题'],
          ['/blog/06-vue/vuex','Vuex'],
          ['/blog/06-vue/vue3','Vue3'],
        ]
      },

    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    // logo:'/logo.jpg'
  }
};