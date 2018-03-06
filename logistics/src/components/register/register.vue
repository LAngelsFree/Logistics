<template>
  <div>
    <mt-header fixed>
      <mt-button v-link="'/'" icon="back" slot="left" @click="aaa">登录</mt-button>
    </mt-header>
    <div class="title">
      <img src="../../common/image/logo@2x.png" height="100" width="360"/>
    </div>
    <div class="register-wrap" >
      <mt-field class="user_input" name="regname" label="账号" placeholder="用户名/邮箱/手机号" v-model="regname"></mt-field>
      <mt-field name="regpasswd" label="密码" placeholder="请输入密码" class="user_input" v-model="regpasswd"></mt-field>
      <mt-field name="regpasswd_ag" label="密码确认"placeholder="请再次输入密码" class="user_input" v-model="regpasswd_ag"></mt-field>
    </div>
    <div class="register-box">


      <mt-button type="primary" size="large" @click="send">注册</mt-button>

    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            regname:'',
            regpasswd:'',
            regpasswd_ag:'',
            reInfo:{}
          }
        },
      methods:{
        send(){
          this.$router.push({path:'/car'})

          // let_this=this;
          // if(_this.regname==''){
          //   alert('请输入手机号');
          // }else if(_this.regpasswd==''||_this.regpasswd_ag==''){
          //   alert('请输入密码');
          // }else if(_this.regpasswd!==_this.regpasswd_ag){
          //   alert('两次输入的密码不一致');
          // }else{
          //   _this.$http.post('/reg',{
          //     regName:_this.regname,
          //     regPasswd:_this.regpasswd
          //   }).then((res)=> {
          //     if (res.status == 200) {
          //       _this.regInfo = res.data;
          //       if (_this.regInfo.status == 1) {
          //         windows.history.go(-1);
          //       } else {
          //         alert('注册失败');
          //       }
          //     } else {
          //       alert('出现错误');
          //     }
          //     console.log(res);
          //   },(err)=>{
          //     console.log(err);
          //
          //   });
          // }
        },
        aaa(){
          this.$router.push({path:'/logon'})
        }
      }
    }
</script>

<style scoped>
  .login_box a{

    display: block;

    width: 100%;

    height: 100%;

    line-height: 50px;

    text-align: center;

    color: deepskyblue;

  }
  .register_box{margin-top: 40px}
</style>
