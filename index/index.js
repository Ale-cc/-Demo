const app = getApp()

Page({
  data: {
    imgUrls:[
  'https://cdn-isux.qq.com/upload/detail/M9Fcne7wV1bLZD542zDG9qZd0FM4xsSHGzRpcCWkxl6.jpg',
      'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/iXOBPqgtIXNMsc7CtpKNuyXjKrimudLWpYmCpvW6heo.gif',
      'https://cdn-isux.qq.com/upload/detail/jbbvby4ORrv7Rf49DrjUeshpjPR2fHc3xRM5OLgWvOh.jpeg',
    ],
    indicatorDots: false,
    indicatorColor: 'orange',
    autoPlay: true,
    interval: 5000,
    duration: 500,
  },
  onLoad: function () {
    // console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
