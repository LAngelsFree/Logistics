<template>
  <div>
    <mt-header>
      <div slot="left">
        <mt-button v-link="'/'" icon="back"></mt-button>
        <span>个人信息</span>
      </div>
    </mt-header>

    <div style="margin-top: 80pt"></div>

<div class="aa">
  <div style="white-space: nowrap">
    <span style="margin-left: 30px">姓名：</span>
    <input class="inline" style="margin-top: 30pt;margin-left: 30px">
    <br>
  </div>
  <!--<mt-radio-->
    <!--:value.sync="value"-->
    <!--:options="['男', '女' ]">-->
  <!--</mt-radio>-->
  <!--<div id="example-4">-->
    <!--<input type="radio" id="one" value="One" v-model="picked">-->
    <!--<label for="one">One</label>-->
    <!--<br>-->
    <!--<input type="radio" id="two" value="Two" v-model="picked">-->
    <!--<label for="two">Two</label>-->
    <!--<br>-->
    <!--<span>Picked: {{ picked }}</span>-->
  <!--</div>-->
  <div style="white-space: nowrap">
    <span style="margin-left: 30px">身份证号：</span>
    <input class="inline" style="margin-top: 30pt;">
    <br>
  </div>


  <div style="white-space: nowrap">
    <span style="margin-left: 30px">手机号：</span>
    <input class="inline" style="margin-top: 30pt;margin-left: 20px">
    <br>
  </div>
  <div style="white-space: nowrap">
    <span style="margin-left: 30px">验证码：</span>
    <input class="inline" style="margin-top: 30pt;margin-left: 20px">
    <button style="font-size:10px" >获取验证码</button>
    <br>
  </div>

</div>

    <center><mt-button type="primary" style="width:200px; margin-top: 20px">完成</mt-button></center>

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

.aa{margin-left:-28px;margin-top:-100pt;}
  input{display:block; width:150px; height:30px; line-height:40px; margin:0 auto; margin-bottom: 10px;
    outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  span{cursor:pointer;}
  .inline
  {
    display:inline;
  }

</style>
