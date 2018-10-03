// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0,
    scale: 16
    
  },
  bindcontroltap: function(e) {
    // console.log(e);
    switch (e.controlId){
      case 1:
        this.movetoCenter();
        // console.log(1)
        break;
      case 2:
        if(this._timer){
          wx.navigateBack({
            delta:1
          })
        }else{
          wx.scanCode({
            success: () => {
              wx.showLoading({
                title: '正在获取密码',
              })
              console.log(222)
              wx.request({
                url: 'https://www.easy-mock.com/mock/5b61a1d42205a5414ac52609/ofo/getPasswords#!method=get',
                success: (res) => {
                  console.log(res)
                  wx.hideLoading()
                  wx.redirectTo({
                    url: '../scanResult/index?passwords=' + res.data.data.passwords + '&number=' + res.data.data.number,
                    success: () => {
                      wx.showToast({
                        title: '获取密码成功',
                        duration: 1000
                      })
                    }
                  })
                }
              })
            }, fail: () => {

            }
          })
        };
        break;
      case 3:
        wx.navigateTo({
          url: '../warn/index',
        })
        break;
      case 6:
        this.scale();
        break;
      case 7:
        this.scale1();
        break;
      case 4:
        wx.navigateTo({
          url: '../my/index',
        })
    }
  },
  scale:function(){
    let _scale=this.data.scale;
    _scale++;
    console.log(_scale)
    this.setData({
      scale:_scale
    })
  },
  scale1: function () {
    let _scale = this.data.scale;
    _scale--;
    console.log(_scale)
    this.setData({
      scale: _scale
    })
  },
  movetoCenter:function(){
    // console.log(this.mapctx)
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._timer=options.timer;
    wx.getLocation({
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    });
    wx.getSystemInfo({
      success: res => {
        this.setData({
          controls: [{
              id: 1,
              iconPath: "/images/location.png",
              position: {
                width: 50,
                height: 50,
                left: 20,
                top: res.windowHeight - 80
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: "/images/use.png",
              position: {
                width: 90,
                height: 90,
                left: res.windowWidth / 2 - 45,
                top: res.windowHeight - 100
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: "/images/warn.png",
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 80
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: "/images/avatar.png",
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 155
              },
              clickable: true
            },
            {
              id: 5,
              iconPath: "/images/marker.png",
              position: {
                width: 30,
                height: 45,
                left: res.windowWidth / 2 - 15,
                top: res.windowHeight / 2 - 45
              }
            },
            {
              id: 6,
              iconPath: "/images/jia.jpg",
              position: {
                width: 20,
                height: 20,
                left: res.windowWidth - 70,
                top: 50
              },
              clickable: true
            }, {
              id: 7,
              iconPath: "/images/jian.jpg",
              position: {
                width: 18,
                height:18 ,
                left: res.windowWidth - 50,
                top:  51
              },
              clickable: true
            }
          ]
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // console.log('onshow')
    // console.log(this)
    this.mapctx = wx.createMapContext("myMap");
    this.movetoCenter();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onhide')
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