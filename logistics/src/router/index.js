import Vue from 'vue'
import Router from 'vue-router'
import logon from 'components/logon/logon'
import mheader from 'components/m-header/m-header'
import home from 'components/home/home'
import App from '../App'
import register from 'components/register/register'
import car from 'components/car/car'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: 'home'
    // },
    // {
    //   path: '/home',
    //   component: home
    // },
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
    // {
    //   path: '/car',
    //   name:'car',
    //   component: car
    // }
    ],
  mode:"history"
  })


