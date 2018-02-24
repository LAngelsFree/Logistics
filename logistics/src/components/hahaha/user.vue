<template>
  <div>
    <mt-header fixed title="大连市">
      <div slot="left">
        <mt-button v-link="'/'" icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </div>
      <i class="icon-mine" slot="right"></i>
    </mt-header>

    <div>
      <center><img style="margin-top: 90pt" src="../../assets/jikuaidi.png" height="140" width="140"/></center>
      <center><img style="margin-top: 40pt" src="../../assets/myorder.png" height="140" width="140"/></center>
</div>

    </div>




</template>

<script>
    export default {
        data () {
          return {

          }
        },
        components:{

        },
        mounted:function(){

        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .circle
    background-color: #ffffff
    font-size: $font-size-large



</style>
