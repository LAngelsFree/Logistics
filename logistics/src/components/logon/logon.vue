<template>

   <div>
     <div class="title">
       <h3 >XX物流</h3>
     </div>
     <div class="login-wrap" >
       <input type="text" placeholder="请输入用户名" v-model="username">
       <input type="password" placeholder="请输入密码" v-model="password">
       <input type="text" placeholder="验证码" v-model="autoCode">
       <button v-on:click="login">登录</button>
       <span v-on:click="ToRegister">没有账号？马上注册</span>
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

<style scoped>
.title{text-align:center;font-size:30px;;margin-top:40pt;}
  .login-wrap{text-align:center;margin-top:60pt}
  input{display:block; width:200px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:200px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:lightskyblue; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:lightskyblue;}

</style>
