<template>
    <div>
      <mt-header>
        <mt-button v-link="'/'" icon="back" slot="left">消费明细</mt-button>
      </mt-header>
      <div style="margin-top:17px;">
        2018年1月
      </div>
        <div class="d1" style="margin-top: 11px;">
          <div style="font-size:10px;">订单号：111111111111&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2018年12月1日</div>
          <div style="font-size:15px;margin-top: 11px;">
            广东广州&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp杨雪&nbsp&nbsp&nbsp&nbsp&nbsp日用品&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp48元
          </div>
        </div>
      <div class="d2">
        <div style="font-size:10px;">订单号：222222222222&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2018年12月1日</div>
        <div style="font-size:15px;margin-top: 11px;">
          广东广州&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp杨雪&nbsp&nbsp&nbsp&nbsp&nbsp日用品&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp48元
        </div>
      </div>
      <div class="d3">
        <div style="font-size:10px;">订单号：333333333333&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2018年12月1日</div>
        <div style="font-size:15px;margin-top: 11px;">
          广东广州&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp杨雪&nbsp&nbsp&nbsp&nbsp&nbsp日用品&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp48元
        </div>
      </div>
      <div class="d4">
        <div style="font-size:10px;">订单号：444444444444&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2018年12月1日</div>
        <div style="font-size:15px;margin-top: 11px;">
          广东广州&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp杨雪&nbsp&nbsp&nbsp&nbsp&nbsp日用品&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp48元
        </div>
      </div>
<div style="margin-left:150px;">共计金额：192元</div>



    </div>
</template>

<script>
    export default {
        name: "consumption-detail"
    }
</script>

<style scoped>
/*.df{width:300px;*/
    /*height:200px;*/
    /*border:1px solid red*/
/*}*/
  .d1,.d2,.d3,.d4{
      width:300px;
      height:50px;
      border:1px solid red;
      margin-left:10px;
  }
</style>
