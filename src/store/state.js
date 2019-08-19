// https://vuex.vuejs.org/en/state.html

export default {
  //
  links: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'echar卡片化'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: '用户列表'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: '表单加响应式echars'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: '字体加element'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: '实战新闻'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      },
      //子路由，非主路由
      {
	    to2: '/pinfo',
	    text2: '新闻详情'
	  },
	  {
	    to2: '/pinfo',
	    text2: '商品'
	  },
	  {
	    to2: '/pinfo',
	    text2: '商品详情'
	  },


    ],
}
