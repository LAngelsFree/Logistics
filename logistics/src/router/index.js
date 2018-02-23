import Vue from 'vue'
import Router from 'vue-router'
import logon from 'components/logon/logon'
import mheader from 'components/m-header/m-header'
import App from '../App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: mheader
    },
    {
          path: '/',
          name:'logon',
          component: logon
    }
    ]
  })


