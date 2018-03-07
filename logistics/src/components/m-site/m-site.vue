<template>
  <div>
    <m-header></m-header>
    <!--<car></car>-->

    <div style="height: 70px;width: 100%;">
      <div style="text-align: center">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-badge :value="0" class="item">
          <el-button size="large">&nbsp;寄快递&nbsp;</el-button>
        </el-badge>
        <el-badge :value="1" class="item">
          <el-button size="large">我的订单</el-button>
        </el-badge>
      </div>

    </div>
    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item  name="1">
          <template slot="title">
            &nbsp;<icon slot="icon" name="send" style="width: 14px;height: 14px"></icon><span style="font-size: 16px">&nbsp;&nbsp;寄件人信息</span>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>

        <el-collapse-item  name="2">
          <template slot="title" style="font-size: 16px">
            &nbsp;<icon slot="icon" name="accept" style="width: 14px;height: 14px"></icon><span style="font-size: 16px">&nbsp;&nbsp;收件人信息</span>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="mg20"></div>

    <div style="margin-top: 20px">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="货物名称">
          <el-input style="width: 90%" v-model="sizeForm.name"></el-input>
        </el-form-item>
        <div class="mg20"></div>
        <el-form-item label="货物类型">
          <el-select v-model="sizeForm.region" placeholder="请选择货物类型">
            <el-option label="工业品" value="industry"></el-option>
            <el-option label="消费品" value="consumer"></el-option>
            <el-option label="农产品" value="production"></el-option>
            <el-option label="其他" value="others"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预定时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 90%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2" style="width: 90%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="货物性质">
          <el-radio-group v-model="radio3">
            <el-radio-button label="有害"></el-radio-button>
            <el-radio-button label="无害"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input style="width: 90%" v-model="sizeForm.ps"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/m-footer/m-footer'
  import MHeader from 'components/m-header/m-header'
  import Car from 'components/car/car'
    export default {
      data() {
        return {
          activeName: '0',
          radio3:"无害",
          sizeForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            ps:''
          },
          // rules: {
          //   name: [
          //     { required: true, message: '请输入活动名称', trigger: 'blur' },
          //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          //   ],
          //   region: [
          //     { required: true, message: '请选择活动区域', trigger: 'change' }
          //   ],
          //   date1: [
          //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          //   ],
          //   date2: [
          //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          //   ],
          //   type: [
          //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          //   ],
          //   resource: [
          //     { required: true, message: '请选择活动资源', trigger: 'change' }
          //   ],
          //   desc: [
          //     { required: true, message: '请填写活动形式', trigger: 'blur' }
          //   ]
          // }

        };
      },
        name: "m-site",

        components:{
          MFooter,
          MHeader,
          Car
        },
        methods:{
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
    }
</script>

<style scoped>
 .mg20{
   margin-top: 20px;
 }
 .item {
   margin-top: 10px;
   margin-right: 40px;
 }
</style>
