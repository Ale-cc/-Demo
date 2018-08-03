const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://cdn-isux.qq.com/upload/detail/M9Fcne7wV1bLZD542zDG9qZd0FM4xsSHGzRpcCWkxl6.jpg',
      'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/iXOBPqgtIXNMsc7CtpKNuyXjKrimudLWpYmCpvW6heo.gif',
      'https://cdn-isux.qq.com/upload/detail/jbbvby4ORrv7Rf49DrjUeshpjPR2fHc3xRM5OLgWvOh.jpeg',
    ],
    subNav:[
      { img_url:'../images/Sheep 2.svg',text:'二手'},
      { img_url:'../images/Puffin Bird.svg',text:'DIY'},
      { img_url:'../images/Turtle.svg',text:'配件'},
      { img_url:'../images/Whale.svg',text:'媒体'},
    ],
    banner:{
      img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_ff1e598a685c2040e2c30c9650362c2a.png&w=1080&h=450&t=webp',
      title:"米品"
    },
    indicatorDots: true,
    indicatorColor: 'orange',
    autoPlay: false,
    interval: 5000,
    duration: 500,
  },
  onLoad: function () {
    // console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    // console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
