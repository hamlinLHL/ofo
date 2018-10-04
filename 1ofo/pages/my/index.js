// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      userUrl:'',
      nickname:'未登录'
    },
    button:'登陆',
    btntype:'primary'
  },
  onGotUserInfo:function(){
    if(this.data.button == '登陆'){
      wx.login({
        success:()=>{
          wx.getUserInfo({
            success:(res)=>{
              this.setData({
                userInfo:{
                  userUrl:res.userInfo.avatarUrl,
                  nickname:res.userInfo.nickName
                },
                btntype:'warn',
                button:'退出登录'
              });
            wx.setStorage({
              key: 'userInfo',
              data: {userInfo:{
                userUrl: res.userInfo.avatarUrl,
                nickname: res.userInfo.nickName
              },
                btntype: 'warn',
                button: '退出登录'},
            })
            }
          })
        }
      })
    }else{
      wx.removeStorage({
        key: 'userInfo',
        success: function(res) {},
      })
      this.setData({
        userInfo: {
          userUrl: '',
          nickname: '未登录'
        },
        button: '登陆',
        btntype: 'primary'
      })
    }
  },
  movetoWallet:function(){
    wx.navigateTo({
      url: '../wallet/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        console.log(res)
        this.setData({
          userInfo: {
            userUrl: res.data.userInfo.userUrl,
            nickname: res.data.userInfo.nickname
          },
          btntype: 'warn',
          button: '退出登录'
        })
      },
    })
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