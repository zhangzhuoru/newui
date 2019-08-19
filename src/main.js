/*!

=========================================================
* Vuetify Material Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vuetify-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts //将echarts注册成Vue的全局属性

import axios from "axios";
// 挂载vue构造函数的原型链，每个组件可以通过this.$axios来调用
Vue.prototype.axios = axios;
Vue.filter('timefix',function(time,pattern=''){
    var dt= new Date(time)
    var y = dt.getFullYear()
    var m = dt.getMonth() + 1
    var d = dt.getDate()
    
    if(pattern&&pattern.toLowerCase()==='yyyy-mm-dd'){
      return `${y}-${m}-${d}`
    }else{
      var hh = dt.getHours()
      var mm = dt.getMinutes()
      var ss = dt.getSeconds()
      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
   })
// axios.defaults.baseURI = process.env.VUE_APP_URL
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use(
		config => {
			config.url = process.env.VUE_APP_URL + config.url;
			return config;
		},
		error => Promise.reject(error)
	)
import ElementUI from  "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Sync store with router
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
