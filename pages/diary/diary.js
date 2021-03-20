// pages/diary/diary.js
Component({
  data: {
    diaris: [
      // {
      //   time: '2021-03-14',
      //   title: '心情好呀好',
      //   image: '/assets/test2.jpg',
      //   content: '略略略略略略略略略略略略略略略'
      // }, {
      //   time: '2021-03-14',
      //   title: '心情好呀好',
      //   image: '/assets/page_background.png',
      //   content: '略略略略略略略略略略略略略略略'
      // }
    ]
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})
