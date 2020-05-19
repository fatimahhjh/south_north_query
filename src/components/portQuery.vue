<!-- 核心端口利用率查询页面 -->
<template>
  <div class="portQuerytPage">
    <div class="operationArea">
      <div class="selectTime">
        <el-date-picker
          v-model="portQueryTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="download">
        <el-tag class="downLoadDetails" effect="dark"
          >导出明细数据</el-tag
        >
        <el-tooltip
          class="item"
          effect="dark"
          content="列表数据仅为该时间段同一设备端口使用率最大的数据"
          placement="right"
        >
          <el-tag class="downLoadListData" effect="dark"
            >导出列表数据</el-tag
          >
        </el-tooltip>
      </div>
    </div>
    <div class="portResultArea">
      <el-table stripe :data="portData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="devicename" label="设备名称"> </el-table-column>
        <el-table-column prop="devip" label="设备地址"> </el-table-column>
        <el-table-column prop="port" label="端口"> </el-table-column>
        <el-table-column prop="intbw" label="intbw"> </el-table-column>
        <el-table-column prop="inmaxvalue" label="inmaxvalue">
        </el-table-column>
        <el-table-column prop="outmaxvalue" label="outmaxvalue">
        </el-table-column>
        <el-table-column prop="maxvalue" label="maxvalue"> </el-table-column>
        <el-table-column prop="utilization" label="使用率"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      portQueryTime: "",
      portData: [
        {
          date: "2016-05-02",
          outmaxvalue: "5555",
          maxvalue: "2222",
          inmaxvalue: "44",
          intbw: "11",
          port: "1223",
          devicename: "sssss",
          devip: "84.7.3.101",
          utilization: "20%"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.portQuerytPage {
  padding: 0 3%;
  .operationArea {
    width: 100%;
    height: 90px;
    .selectTime {
      float: left;
      margin-top: 2%;
    }
    .download {
      float: left;
      margin-left: 8%;
      margin-top: 31px;
    }
    .el-tag--dark {
      background-color: #222842;
      border-color: #222842;
      color: rgb(210, 220, 255);
    }
  }
}
</style>
