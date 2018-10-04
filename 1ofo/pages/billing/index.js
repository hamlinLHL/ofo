// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    hour: 0,
    mini: 0,
    second: 0,
    clickable:false,
    cal:'正在计费'
  },
  endride:function(){
    clearInterval(this.timer);
    this.timer="";
    this.setData({
      clickable: true,
      cal:'本次骑行时间'
    })
  },
  movetomap:function(){
    if(this.timer==""){
      wx.redirectTo({
        url: '../index/index',
      })
    }else{
      wx.navigateTo({
        url: '../index/index?timer='+this.timer,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      number: options.number
    })
    let h = 0;
    let m = 0;
    let s = 0;
    let t = 0;
    this.timer=setInterval(()=>{
      t++
      h=Math.floor(t/3600);
      m=Math.floor((t%3600)/60);
      s = (t % 3600) % 60;
      if(s<10){
        s="0"+s
      } 
      if (m < 10) {
        m = "0" + m
      } 
      if (h < 10) {
        h = "0" + h
      }
      this.setData({
        hour: h,
        mini: m,
        second: s,
      })
    },1000)
    // this.timer = setInterval(() => {
      
    //   if(s<10){
    //     s='0'+s;
    //   }
    //   this.setData({
    //     second: s
    //   });
    //   s++;
    //   if (s == 60) {
    //     s = 0;
    //     m++;
    //     if(m<10){
    //       m='0'+m
    //     }
    //     setTimeout(() => {
    //       this.setData({
    //         mini: m,
    //       })
    //     }, 1000)
    //     if(m==60){
    //       m=0;
    //       h++;
    //       if(h<10){
    //         h='0'+h;
    //       }
    //       setTimeout(()=>{
    //         this.setData({
    //           hour:h
    //         },1000)
    //       })
    //     }
    //   }

    // }, 1000)


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})