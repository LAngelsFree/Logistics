import Vue from 'vue'
import Router from 'vue-router'
import logon from 'components/logon/logon'
import home from 'components/home/home'
import register from 'components/register/register'
import car from 'components/car/car'
import msite from 'components/m-site/m-site'
import orderInfo from 'components/orderInfo/orderInfo'
import personInfo from 'components/personInfo/personInfo'
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'logon'
    },
    {
      path: '/home',
      name:'home',
      component: home
    },
    {
      path: '/logon',
      name:'logon',
      component: logon
    },
    {
      path: '/register',
      name:'register',
      component: register
    },
    {
      path: '/car',
      name:'car',
      component: car
    },
    {
      path: '/msite',
      name:'msite',
      component: msite
    },
    {
      path: '/orderInfo',
      name:'orderInfo',
      component: orderInfo
    },
    {
      path: '/personInfo',
      name:'personInfo',
      component: personInfo
    },
    ],
  mode:"history"
  })


