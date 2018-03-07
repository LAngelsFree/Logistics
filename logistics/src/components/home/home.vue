<template>
  <div>
    <m-header></m-header>
    <div class="padtop40 bgf5">
      <div class="ih50 padlr10 box bgfff">
        <span  class="">当前选择城市</span>
        <span  class="right fs0-8 col9f">定位不准时，请在城市列表选择</span>
      </div>
      <mt-cell  title="大连" class="col after" to="/msite"  is-link  value=""></mt-cell>

      <div class="mgtop10 bgfff">
        <mt-cell class="after" title="热门城市"></mt-cell>
        <div class="itembox ovhid col">
          <div v-for="item in hotcity">{{item.name}}</div>
        </div>
      </div>

      <div v-for="(items,index) in getlist" class="mgtop10 bgfff">
        <mt-cell class="after" :title="index"></mt-cell>
        <div class="itembox ovhid">
          <div class="nowarp" v-for="item in items">{{item.name}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script  type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  export default {
    data () {
      return {
        citylist:"",
        hotcity:""
      }
    },
    components:{
      MHeader
    },
    mounted:function(){
     this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
        // console.log(response);
        this.citylist = response.data;
      }, response => {
        // console.log(response);
      });

      this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(response => {
        // console.log(response);
        this.hotcity = response.data;
      }, response => {
        // console.log(response);
      });
    },
    computed:{
      getlist:function(){
        var mycitylist={};
        for(var i=65;i<=90;i++){
          var num= String.fromCharCode(i);
          mycitylist[num]=this.citylist[num];
        }
        return mycitylist
      }
    },
    methods:{

    }
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
