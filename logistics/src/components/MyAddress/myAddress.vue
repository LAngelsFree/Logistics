<template>
  <div>
    <mt-header>
      <mt-button v-link="'/'" icon="back" slot="left">我的地址</mt-button>
    </mt-header>



    <div class="aa">
      <div style="margin-top: 20pt;margin-left: 20px;font-size:12px;">
        姓名:XX<br>
        电话号码:66666666666<br>
        地址:XX省XX市XX区XX路XX号<br>
      </div>
      <div style="margin-left:180px;margin-top: 20pt;">
        <button v-on:click="delet">删除</button>
        <button v-on:click="edit">编辑</button>
      </div>
    </div>





    <center><mt-button type="primary" style="width:200px; margin-top: 20px">新增发货地址</mt-button></center>

  </div>

</template>

<script>
  export default {
    name: "ship-address"
  }
</script>

<style scoped>

  .aa{
    width:300px;
    height:120px;
    margin:30px auto;
    border:1px solid #000;
  }


</style>
