// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:"张军",
    spell:"Zhang Jun",
    job:"求职意向:",
    exp:"Web前端实习岗",
    tel: "17746073763",
    sex: "男",
    age: 23,
    email: "2556105535@qq.com",
    address: "福建省福州市鼓楼区五凤街道江厝路376号",
    skill:[
      { name: "html/css/js", percent:75},
      { name: "es6", percent: 55 },
      { name: "vue", percent: 65 },
      { name: "node", percent: 70 },
      { name: "小程序", percent: 68 },
      { name: "git操作", percent: 60 }
    ],
    education:[
      {
        school:"福建船政交通职业学院",
        major:"软件技术",
        year:"2015-2018",
        desc:"主修课程：c#，web基础，.net，php，oracle，软件测试。"
      },
      {
        school:"福建闽江学院",
        major:"软件工程",
        year:"2018-2020",
        desc:"主修课程：Java基础，web基础，JavaWeb，js，oracle，软件工程。"
      }
    ],
    work:[
      {
        company:"福建米客互联网科技有限公司",
        job:"前端实习生",
        year:"2019.7-2019.9",
        desc:"完成上级技术总监安排的工作，实现web网页的布局和js的行为事件特效以及功能开发，并配合产品经理及后端，开发工程师执行常态的优化工作。"
      },
      {
        company:"福建恭安网盾电子技术有限公司",
        job:"实习生",
        year:"2018.7-2018.9",
        desc:"负责公司制卡部证件ps修图工作，整理相关文件等实习工作。"
      }
    ],
    project:[
      {
        name:"cms内容系统",
        title: '项目技术：vue、es6、node.js、mongodb、axios、elementUI。',
        desc:"项目描述：系统采用前后端分离，前端主要使用vue-adm in-template作为模板进行二次开发，后端使用node.js及koa2.x框架进行接口设计（restful api）koa2.x搭建服务器，数 据库使用mongodb实现对数据的操作，使用elementUI实现页面组件效果 ，使用Axios实现前后端数据交互。",
      },
      {
        name:"云音乐小程序",
        title:"项目技术：小程序 、es6、node、mongodb。",
        desc:"项目描述：模仿网易云app风格布局，运用小程序云开发模式，云函数，云存储，云调用，云数据库一系列技术栈实现歌 单播放歌曲，类似朋友圈的博客，以及个人中心三个模块功能。",
      },
      {
        name:"仿币乎文章发布系统",
        title: "项目技术：html、css、JavaScript、jQuery、node.js、mongodb。",
        desc:"项目描述：网站主要是模仿一个币圈量身定制的垂直社区平台网站。包括登录、注册、文章展示、发布文章、个人中心等 。网站页面主要使用html+css进行布局美化，JavaScript和jQuery进行动态效果的实现。使用node.js以及框架搭建服务 器，数据库使用mongodb实现对数据的操作。",
      }
    ],
    introduction:"我为人友善，做事认真负责，拥有团队精神，能够编写语义化html，完成响应式，自适应等常见布局，熟悉运用css3&html5新特性，熟练掌握ajax，会使用css预处理语法less/sass，掌握vue，node，es6基本知识，了解webpack，mongodb，熟悉git系统工作方式，对新技术保持高度的敏感性和关注度。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})