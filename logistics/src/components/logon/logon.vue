<template>

   <div>
     <div class="title">
       <img src="../../common/image/logo@2x.png" height="100" width="360"/>
     </div>
     <div class="login-wrap" >
       <mt-field class="userInfo" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
       <mt-field class="userInfo" label="密码" placeholder="请输入密码" type="password" v-model="password" :type="isRead" >
         <mt-switch v-model="value"></mt-switch>
       </mt-field>
       <mt-field class="userInfo" label="验证码" placeholder="请输入验证码" v-model="captcha">
         <img src="" height="45px" width="100px">
       </mt-field>

     </div>

     <div class="logonButton">
       <mt-button type="primary" size="large">登录</mt-button>
       <br/>
       <mt-button type="primary" size="large" @click="send">注册</mt-button>

     </div>

     <div>
       <span class="forgotPassword">忘记密码？</span>
     </div>


   </div>
</template>

<script>
    export default {
      data() {
        return {
          value: false
        }
      },
      components: {},
      mounted: function () {

      },
      computed: {
        isRead: function () {
          if (this.value == false) {
            return 'password';
          }
          else {
            return '';
          }
        }

      },
      methods: {
        send:function(){
          this.$router.push('/register');
        }
      }
    }

</script>

<style scoped>
.title{font-size:30px;;margin-top:40pt;}
  .login-wrap{text-align:center;margin-top:60pt}

  p{color:red;}
  img{margin-left: auto;margin-right: auto}
  span{cursor:pointer;}
  span:hover{color:white;}
  .userInfo{border-bottom: solid 1px; border-color: #dddddd}
  .forgotPassword{position:relative;margin-top:10px;float: right;: right;color: #26a2ff;}
  .logonButton{margin-top: 40px}
</style>
