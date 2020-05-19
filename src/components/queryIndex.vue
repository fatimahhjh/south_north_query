<!-- 查询初界面-->

<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="content">
      <div class="title_box">
        南北数据一体可视化通用查询
      </div>
      <div class="search_box">
        <el-input
          class="header_search"
          placeholder="输入关键字搜索"
          prefix-icon="el-icon-search"
          v-model="keyword"
          clearable
          @keyup.enter.native="searchEnterFun"
        >
        </el-input>
        <div class="dropDownOptions">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ selectedOption
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="接口">接口</el-dropdown-item>
              <el-dropdown-item command="交换机端口"
                >交换机端口</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="bottom">
     <div class="linksArea">
 <div class="links_area">
        <ul>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
          <li>ddd</li>
          <li>eee</li>
          <li>fff</li>
        </ul>
      </div>
      <div class="links_area">
        <ul>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
          <li>ddd</li>
          <li>eee</li>
          <li>fff</li>
        </ul>
      </div>
     </div>
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
      keyword: "",
      selectedOption: "下拉菜单"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCommand(command) {
      this.selectedOption = command;
      this.$message(command);
    },
    searchEnterFun: function(e) {
      var keyCode = window.event ? e.keyCode : e.which;
      // console.log("回车搜索", keyCode, e);
      if (keyCode == 13 && this.keyword) {
        if (this.selectedOption == "交换机端口") {
          this.$router.push({
            name: "query-port",
            params: { keyword: this.keyword, data: this.intList }
          });
        } else if (this.selectedOption == "接口") {
          this.$router.push({
            name: "query-int",
            params: { keyword: this.keyword }
          });
        } else {
          this.$router.push({
            name: "query-main",
            params: { keyword: this.keyword }
          });
        }

        // console.log(this.keyword)
      }
    },
    connectBackPlatform() {
      this.$http
        .get("/query/int/getInt")
        .then(res => {
          this.intList = res.data.interfaces;
          console.log(this.intList);
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.connectBackPlatform();
  },
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
.wrapper {
  background: #222842;
  height: 100%;
  .content {
    width: 100%;
    height: 260px;
    background: #222842;
    margin-bottom: 2%;
    .title_box {
      width: 50%;
      height: 50px;
      color: white;
      margin: 5% auto;
      font-size: 20px;
      font-weight: bold;
      color: white;
      letter-spacing: 4px;
      &:hover {
        color: rgb(192, 193, 194);
      }
    }
    .search_box {
      .el-icon-search {
        position: relative;
        left: -9%;
      }
      .header_search {
        width: 55%;
        color: black;
        font-size: 15px;
        margin-top: 2%;
        border: none;
      }
      /deep/.el-input--suffix .el-input__inner {
        padding-right: 30px;
        height: 54px;
      }
      input::placeholder {
        color: rgb(184, 184, 184);
      }
      .el-input__prefix {
        left: 15px;
        top: 8px;
      }
      .dropDownOptions {
        width: 100px;
        margin-left: 67%;
        margin-top: -31px;

        .el-dropdown-link {
          cursor: pointer;
          color: #409eff;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }
      }
    }
  }
  .bottom {
    height: 240px;
.linksArea{
    width: 50%;
    margin: 0 auto;
    .links_area {
      width: 50%;
      float: left;
       li {
        color: rgb(192, 193, 194);
        width: 20%;
        margin: 10px auto;
        font-size: 14px;
        text-decoration: underline;
       }
    }
}
  }
}
</style>
