<template>
  <div>
    <mt-header fixed title="更改密码">
      <div slot="left">
        <mt-button v-link="'/'" icon="back"></mt-button>
        <span>我的</span>
      </div>
    </mt-header>

    <div style="margin-top: 80pt"></div>

    <form>
      <span style="margin-left: 30px">原密码：</span>
      <input class="inline" style="margin-top: 30pt;margin-left: 30px" placeholder="输入原始密码"><br>
      <span style="margin-left: 30px">原密码：</span>
      <input class="inline" style="margin-top: 30pt;margin-left: 30px" placeholder="输入原始密码"><br>
      <span style="margin-left: 30px">原密码：</span>
      <input class="inline" style="margin-top: 30pt;margin-left: 30px" placeholder="输入原始密码"><br>
    </form>
    <center><mt-button type="primary" style="width:200px; margin-top: 20px">提交</mt-button></center>

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

  input{display:block; width:280px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px;
    outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  span{cursor:pointer;}
  .inline
  {
    display:inline;
  }

</style>
