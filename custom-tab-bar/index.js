Component({
  data: {
    selected: 0,
    color: "#a598a6",
    selectedColor: "#bc6781",
    list: [{
      pagePath: "/pages/diary/diary",
      iconPath: "/assets/icons/diary.png",
      selectedIconPath: "/assets/icons/diary_selected.png",
      // text: "组件"
    }, {
      pagePath: "/pages/square/square",
      iconPath: "/assets/icons/square.png",
      selectedIconPath: "/assets/icons/square_selected.png",
      // text: "接口"
    }, {
      pagePath: "/pages/user/user",
      iconPath: "/assets/icons/user.png",
      selectedIconPath: "/assets/icons/user_selected.png",
      // text: "接口"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})