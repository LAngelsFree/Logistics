<template>
  <div>
    <br/>
    <div class="padtop40 bgf5">
      <mt-cell title="寄件人信息" class="col after" to="" is-link value="">
        <img src="../../components/car/ji.png" height="30" width="30"/>
      </mt-cell>
    </div>
    <br/>
    <div class="padtop40 bgf5">
      <mt-cell title="收件人信息" class="col after" to="" is-link value="">
        <img src="../../components/car/shou.png" height="30" width="30"/>
      </mt-cell>
    </div>
    <br/>
    <br/>
    <div id="xialacaidan1">
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      货物类型&nbsp&nbsp<select>
        <option value="1"></option>
        <option value="2">枪11111111111111111111111111</option>
        <option value="3">毒品</option>
        <option value="4">炸弹</option>
    </select>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      货物重量&nbsp&nbsp<input type="text"/>Kg
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="xialacaidan2">
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      货物体积&nbsp&nbsp<select>
        <option value="1"></option>
        <option value="2">我是下拉项目22222222222222222</option>
        <option value="3">我是下拉项目3</option>
        <option value="4">我是下拉项目4</option>
      </select>&nbspL
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      是否液体&nbsp&nbsp<select>
        <option value="1"></option>
        <option value="2">是</option>
        <option value="3">否</option>
      </select>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="xialacaidan3">
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      取件时间&nbsp&nbsp<select>
        <option value="1"></option>
        <option value="2">我是下拉项目22222222222222222</option>
        <option value="3">我是下拉项目3</option>
        <option value="4">我是下拉项目4</option>
      </select>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="xialacaidan4">
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      备注&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text"/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="xialacaidan5">
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      是否有害&nbsp&nbsp<select>
        <option value="1"></option>
        <option value="2">我是下拉项目22222222222222222</option>
        <option value="3">我是下拉项目3</option>
        <option value="4">我是下拉项目4</option>
      </select>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="xialacaidan6">
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      预估费用&nbsp&nbsp<input type=""/>&nbsp&nbsp元
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div align="center">
        <button v-on="" style="width: 600px;height: 80px;background-color: dodgerblue">
          <font size="6" color="white">提交订单</font>
        </button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "car"
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .itembox>div{
    width:25%;
    float:left;
    text-align:center;
    height:40px;
    line-height:40px;
    box-sizing: border-box;
    border-right:1px solid #e4e4e4;
    border-bottom:1px solid #e4e4e4;
  }
  .itembox>div:nth-child(4n){
    border-right:0px;
  }
</style>
