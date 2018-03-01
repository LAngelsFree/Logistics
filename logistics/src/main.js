// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import store from './store/index'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'common/style/mycss.css'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(Mint)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
