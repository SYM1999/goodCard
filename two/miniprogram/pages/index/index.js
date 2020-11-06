Page({

  /**
   * 页面的初始数据
   */
  data: {
    showtrue:"showtrue",
    showfalse:"showfalse",
    showwechat:false,
    showqq:false,
    showtiktok:false,
    ifonticons:"1",
  },
  showPopupWechat(){
    console.log("1")
    this.setData({showwechat:true})
  },
  showPopupQq(){
    this.setData({showqq:true})
  },
  showPopupTiktok(){
    this.setData({showtiktok:true})
  },
  showCloseWechat(){
    this.setData({showwechat:false})
  },
  showCloseQq(){
    this.setData({showqq:false})
  },
  showCloseTiktok(){
    this.setData({showtiktok:false})
  },

  onTabOne(){
    this.setData({
    ifonticons:"1",
    showtrue:"showtrue",
    showfalse:"showfalse",
    })

  },
  onTabTwo(){
    this.setData({
    ifonticons:"2",
    showtrue:"showfalse",
    showfalse:"showtrue",
    })

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