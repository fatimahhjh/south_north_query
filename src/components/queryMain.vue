<!-- 进入查询界面 -->
<template>
  <div class="query_content">
    <div class="search_area">
      <!-- <div class="search_left">
        <input type="text" class="header_search" placeholder="输入关键字搜索" />
        <i class="el-icon-search"></i>
      </div> -->
      <div class="search_left">
        <search
          @list="onList"
          @filterStr="onFilteStr"
          :filterDataList="intList"
        ></search>
      </div>
    </div>
    <div class="search_nav">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
          background-color="#222842"
          text-color="rgb(210, 220, 255)"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="query-all">搜全部</el-menu-item>
          <el-menu-item index="query-tool">搜工具</el-menu-item>
          <el-menu-item index="query-doc">搜文档</el-menu-item>
          <el-menu-item index="query-metric">搜指标</el-menu-item>
          <el-menu-item index="query-resource">搜资源</el-menu-item>
          <el-menu-item index="query-config">搜配置</el-menu-item>
          <el-menu-item index="query-software">搜软件</el-menu-item>
          <el-menu-item index="query-incident">搜事件</el-menu-item>
          <el-menu-item index="query-script">搜脚本</el-menu-item>
          <el-menu-item index="query-int">接口查询</el-menu-item>
          <el-submenu index="2">
            <template slot="title">后台管理功能</template>
            <el-menu-item index="query-customerize">数据源管理</el-menu-item>
            <el-menu-item index="2-2">采集对象管理</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="query-port">核心端口利用率</el-menu-item>
        </el-menu>
    </div>
    <div class="result_area">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import search from "./searchTool.vue";
// import _ from "lodash";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    search
  },
  data() {
    //这里存放数据
    return {
      filterword: "",
      filterResult: [],
      totalFilterNum: ""
    };
  },
  //监听属性 类似于data概念
  computed: {
    activeIndex2() {
      return this.$route.path.replace("/", "");
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //过滤查询方法
    onList(_list) {
      this.filterResult = _list;
      var filterlength = parseInt(this.filterResult.length);
      this.totalFilterNum = filterlength;
      console.log(this.filterResult, "kkk");
      if (this.totalFilterNum == 0) {
        this.$message.error("查无此信息，请确认输入内容是否准确！");
      } else {
        this.$router.push({
          name: "query-int",
          params: {
            filterword: this.filterword,
            filterResult: this.filterResult
          }
        });
      }
    },
    onFilteStr(_filteStr) {
      this.filterword = _filteStr;
      console.log(this.filterword);
    }
  },
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
.query_content {
  .search_area {
    height: 70px;
    background-color: #222842;
    .search_left {
      float: left;
      width: 26%;
      margin-left: 2%;
    }
  }
.search_nav{
  margin: 1px 0 17px 34px;
  
}
  .result_area {
    // border: 1px solid black;
  }
}
</style>
