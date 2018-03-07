// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Icon from 'vue-svg-icon/Icon.vue'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import 'common/stylus/index.styl'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'common/style/mycss.css'
import axios from 'axios'
import store from './store/index.js'



Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.component('icon', Icon);
// const store = new Vuex.store({
//   state: {
//
//   }
// })

// const state = ({
//     selected: "msite"
//   }
// )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
