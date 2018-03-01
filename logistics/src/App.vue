<template>
  <div id="app">
    <m-header></m-header>
    <!--<home></home>-->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Home from 'components/home/home'

export default {

  components: {
    MHeader,
    Home
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

</style>
