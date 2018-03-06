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
       <!--<mt-field class="userInfo" label="验证码" placeholder="请输入验证码" v-model="captcha">-->
         <!--<img src="" height="45px" width="100px">-->
       <!--</mt-field>-->

     </div>
     <span class="error error-show" v-show="errorTip">
        用户名或者密码错误
     </span>
     <br/>
     <div class="logonButton">
       <mt-button type="primary" size="large" @click="login">登录</mt-button>
       <br/>
       <mt-button type="primary" size="large" @click="send">注册</mt-button>

     </div>

     <div>
       <span class="forgotPassword">忘记密码？</span>
     </div>


   </div>
</template>

<script>
    import axios from 'axios'
    export default {
      data() {
        return {
          value: false,
          username:'',
          password:'',
          errorTip:false
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
        },
        // login:function(){
        //   axios.post("/logon/login",{
        //     username:this.username,
        //     password:this.password
        //   }).then((response)=>{
        //     let res = response.data;
        //     if(res.status == '0'){
        //       this.errorTip = false;
        //     } else {
        //       this.errorTip = true;
        //     }
        //   })
        // }

        login:function(){
          var username = this.username;
          var password = this.password;
          this.$http.post('/api/user/userLogin',{
            username: username,
            password: password
          },{}).then((response)=>{
            let res = response.data;
            if(res.status == '0'){
              this.errorTip = false;
            } else {
              this.errorTip = true;
            }
            console.log(response);
          })
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
  .error{
    font-size: 12px;
    color: #d31723;
    visibility: hidden;
    display: block;
    padding: 0 0 7px 17px;
    line-height: 16px;
    height: 16px;
    text-align: left;
    background: url("../../common/image/icon.png") 0 -100px no-repeat;
  }
  .error-show{
    visibility: visible;
    height: auto;
  }
</style>
