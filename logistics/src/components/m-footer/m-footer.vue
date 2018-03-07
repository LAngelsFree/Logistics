<template>
  <div>
    <!--<mt-tabbar v-model="$store.state.selected">-->
    <mt-tabbar v-model="$store.state.selected">
      <mt-tab-item id="msite">
        <icon slot="icon" v-bind:class="[ $store.state.selected=='msite'? 'on' : '']" name="msite"></icon>
        首页
      </mt-tab-item>
      <mt-tab-item id="orderInfo">
        <icon slot="icon" v-bind:class="[ $store.state.selected=='orderInfo'? 'on' : '']" name="orderInfo"></icon>
        订单
      </mt-tab-item>
      <mt-tab-item id="show">
        <icon slot="icon" v-bind:class="[ $store.state.selected=='show'? 'on' : '']" name="show"></icon>
        展示
      </mt-tab-item>
      <mt-tab-item id="personInfo">
        <icon slot="icon" v-bind:class="[ $store.state.selected=='personInfo'? 'on' : '']" name="profile"></icon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    export default {
        name: "m-footer",
        mounted:{

        },
        computed:{
          gopage: function(){
            return this.$store.state.selected
          }
        },
        methods:{

        },
        watch:{
          gopage(newval,oldval){
            this.$router.push(newval)
          }
        }
    }
</script>

<style scoped>
  .on{
    fill:#26a2ff;
  }

</style>
