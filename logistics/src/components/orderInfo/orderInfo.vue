<template>
  <div>
    <div class="d3">
      <div style="font-size:10px;">订单号：123456789123&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp下单时间：2018年1月1日4：17PM</div>
      <div>
        <center><img style="margin-bottom:-35px;margin-left:10px;" src="../../assets/jiantou.png" height="20" width="170"/></center>
      </div>
      <div>
        <div style="margin-left: 20px;margin-bottom:10px;">大连市</div>
        <div style="margin-left: 25px;margin-bottom:60px;">张三</div>
      </div>
      <div>
        <table id="b">
          <tr><th>上海市</th></tr>
          <tr><th>李四</th></tr>
        </table>
      </div>
    </div>
    <div class="d2">
      <div style="margin-top:15pt;">合计：</div>
      <div class="d5"></div>

    <div style="font-size:1px; margin-top:-18pt;margin-left:100px;color:lightskyblue;">
      <button>取消订单</button>
      <button>付款</button>
      <button>查看物流</button>
    </div>
    </div>


  </div>

</template>

<script>
    export default {
        name: "order-info"
    }
</script>

<style scoped>
  .d2{
    width:300px;
    height:40px;
    border:1px solid #000;

  }
.d3{
  width:300px;
  height:110px;
  border:1px solid #000;
}
  .d5{
    width:35px;
    height:15px;
    border:1px solid #000;
    margin-top:-11pt;
    margin-left:40px;
  }
  #b{margin-top:-100px;margin-left:230px;}

</style>s
