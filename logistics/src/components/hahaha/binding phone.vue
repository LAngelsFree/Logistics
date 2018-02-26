<template>
  <div>
    <mt-header fixed title="绑定手机号">
      <div slot="left">
        <mt-button v-link="'/'" icon="back"></mt-button>
        <span>我的</span>
      </div>
    </mt-header>

    <div style="margin-top: 90pt"></div>

    <input style="margin-left: 60px" placeholder="输入手机号"></input>
    <div>

      <input class="inline" style="margin-top: 30pt;margin-left: 60px" placeholder="输入验证码">
      <button style="font-size:12px" >验证码</button>

    </div>



    </input><font style="margin-left: 50pt" size="2" color=#888>验证码将通过短信发送到您的手机。</font>
    <mt-button type="primary" style="margin-top: 30pt; margin-left: 70px;width:220px">完成</mt-button>

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

  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px;
    outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  span{cursor:pointer;}
  .inline
  {
    display:inline;
  }

</style>
