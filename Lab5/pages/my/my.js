// pages/my/my.js
var common = require('../../utils/common.js') //引用公共JS文件

Page({
  
  getMyInfo: function()
  {  
    let info = e.detail.userInfo;
    this.setData({
      isLogin:true,
      src:info.avatarUrl,
      nickName:info.nickName
    })
    this.getMyFavorites();
  },
  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    nickName:'未登录',
    src:'/images/index.png',
    newsList:[{
      id: '264698',
      title: '“烽烟号角——《晋察冀画报》摄影文献展”在中国人民抗日战争纪念馆开展',
      poster: 'https://imgculture.gmw.cn/attachement/jpg/site2/20230904/f44d30758a69265f7c8956.jpg',
      content: ' 9月3日，参观者在中国人民抗日战争纪念馆观看“烽烟号角——《晋察冀画报》摄影文献展”。当日，为纪念中国人民抗日战争暨世界反法西斯战争胜利78周年，“烽烟号角——《晋察冀画报》摄影文献展”在中国人民抗日战争纪念馆隆重揭幕。展出的摄影作品带领人们重温中华民族抗战的光辉历史，感悟伟大抗战精神，汲取奋进新时代的磅礴力量。',
      add_date: '2023-09-04'
    }
    ]
  },
  // 获取收藏列表
  getMyFavorites:function(){
    let info = wx.getStorageInfoSync()  //读取本地缓存信息
    let keys = info.keys    //获取全部key信息 
    let num = keys.length   //获取收藏新闻数量
    
    let myList = [];
    for( var i = 0; i < num; i++ ){
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    //更新收藏列表
    this.setData({
      newsList:myList,
      num:num
    })
  },
  goToDetail: function (e) {
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    //console.log(e)
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if( this.data.isLogin ){
      this.getMyFavorites()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})