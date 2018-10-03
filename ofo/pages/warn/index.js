// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickable:true,
    btnColor:'#fff',
    checkboxValue:[],
    inputValue:{
      number:0,
      desc:''
    },
    add: '拍摄/相册',
    picUrls: [],
    itemsValue: [{
      value: '私锁私用',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '车牌缺损',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '轮胎坏了',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '车锁坏了',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '违规乱停',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '密码不对',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '刹车坏了',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '其他故障',
      checked: false,
      color: '#b9dd08'
    }]
  },
  changeCheckbox:function(e){
    var _value = e.detail.value;
    
    if(_value.length>0){
      this.setData({
        checkboxValue: _value,
        btnColor:'#b9dd08',
        clickable:false
      })
      
    }else{
      this.setData({
        checkboxValue: [],
        btnColor: '#f2f2f2',
        clickable: true
      })
    }
  },
  clickPhoto:function(){
    wx.chooseImage({
      success: (res)=> {
        var _picUrls = this.data.picUrls.concat(res.tempFilePaths);
        this.setData({
          picUrls:_picUrls,
          add:'+'
        })
      },
    })
  },
  cancle:function(e){
    let _delete=this.data.picUrls;
    _delete.splice(e.target.dataset.index, 1)
    this.setData({
      picUrls: _delete,
    })
    if(this.data.picUrls==0){
      this.setData({
        add: '拍摄/相册'
      })
    }
  },
  changeNumber: function (e) {
    
    this.setData({
      inputValue: {
        number: e.detail.value,
        desc:this.data.inputValue.desc,
      }
    })
      
    
  },
  changedesc:function(e){
    this.setData({
      inputValue: {
        number: this.data.inputValue.value,
        desc: e.detail.desc,
      }
    })
  },
  submit:function(){
    if(this.data.picUrls.length>0&&this.data.checkboxValue.length>0){
      wx.request({
        url: 'https://www.easy-mock.com/mock/5b61a1d42205a5414ac52609/ofo/jiekou#!method=get',
        success:(res)=>{
          wx.showToast({
            title: '提交成功',
            icon:'success'
          });
        }
      });
      setTimeout(()=>{
        wx.navigateBack({
          delta: 1
        })
      },1500)
    }else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '别瞅了，赶紧填',
        confirmText:'我填喽',
        cancelText:'劳资不填',
        success:(res)=>{
          if(res.confirm){

          }else{
            wx.navigateBack({
              delta:1
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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