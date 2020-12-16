// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.css' // 全局样式
// import './styles/element-variables.less'

import './mock/index'
import * as Service from '../src/utils/http'

import './assets/fonts/font_2272971_0xb1gellzik/iconfont.css'

Vue.use(Element)
Vue.prototype.$http = Service
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
