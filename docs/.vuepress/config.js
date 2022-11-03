
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
      { text: '微博', link: 'https://baidu.com' }
    ],
    sidebar: [
      {
        title: '前端基础',
        collapsable: true,
        children: [
          ['/blog/HTMLCSS/01-前言&WEB标准','01-前言&WEB标准'],
          // '/blog/fontend/myhtml',
          // 
          // '/blog/01-frontBasics/02-认识HTML',
          // '/blog/HTMLCSS/02-认识HTML',
          // '/blog/01-frontBasics/01-前言&WEB标准',
          // '/blog/01-frontBasics/01-前言&WEB标准',
          // '/blog/01-frontBasics/01-前言&WEB标准',
        ]
      },
      {
        title: '前端js基础',
        collapsable: true,
        children: [
          '/blog/js/myjava',
        ]
      },
        // {
        //   title: '分组2 后端',
        //   collapsable: true,
        //   children: [
        //     '/blog/backend/myjava',
        //   ]
        // }

    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    // logo:'/logo.jpg'
  }
};