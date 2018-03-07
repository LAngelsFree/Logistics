<template>
  <div id="app">
    <!--<m-header></m-header>-->
    <!--<home></home>-->
     <!--<transition  :name="transitionName">-->
       <!--<router-view class="Router"></router-view>-->
     <!--</transition>-->
    <router-view></router-view>


    <!--<register></register>-->
    <!--<ul>-->
      <!--<button><router-link to="/logon">login</router-link> </button>-->
      <!--<li><router-link to="/register">register</router-link></li>-->
    <!--</ul>-->

  </div>
</template>

<script type="text/ecmascript-6">
  // import MHeader from 'components/m-header/m-header'
  // import Home from 'components/home/home'
  // import Register from 'components/register/register'
export default {
  name: 'App',
  data(){
    return {
      transitionName:'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      if(isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },


  components: {

    // MHeader,
    // Home
    // Register
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .Router {
    position: absolute;
    width: 100%;
    transition: all .8s ease;
    top: 40px;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }

</style>
