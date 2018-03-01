import Vue from 'vue'
import Router from 'vue-router'
import logon from 'components/logon/logon'
import mheader from 'components/m-header/m-header'
import home from 'components/home/home'
import App from '../App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/logon',
      name:'logon',
      component: logon
    }
    ]
  })


