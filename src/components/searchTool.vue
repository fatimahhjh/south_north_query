<template>
  <div class="search_box">
    <input
      type="text"
      class="header_search"
      placeholder="输入关键字搜索"
      v-model="filteStr"
    />
    <div class="search_logo">
      <i class="el-icon-search"></i>
    </div>
  </div>
</template>

<script>
let _ = require("lodash");
// import _ from "lodash";
export default {
  data() {
    return {
      filteStr: ""
    };
  },
  props: {
    // 将父组件的数据拿过来做筛选
    filterDataList: {
      type: Array
    }
  },
  watch: {
    filteStr: _.debounce(function() {
      this.getFilterData();
    }, 500),
    // 如果父组件的数据发生变化,重新调用
    filterDataList: {
      deep: true,
      handler: function() {
        this.getFilterData();
      }
    }
  },
  methods: {
    // 传对象,和关键字
    filteData(data, str) {
      return data.filter(item => {
        // 是否存在返回true
        return this.containsVal(item, str);
      });
    },
    // 查找对象里面是否存在关键字
    containsVal(obj, keyword) {
      let flag = false;
      for (var p in obj) {
        if (String(obj[p]).indexOf(keyword) >= 0) {
          flag = true;
          break;
        }
      }
      return flag;
    },
    // 接收筛选出来的数据
    getFilterData() {
      this.list = this.filteData(this.filterDataList, this.filteStr);
      this.$emit("filteStr", this.filteStr);
      console.log(this.filteStr, "ffffff");
      this.$emit("list", this.list);
    }
  },
  mounted() {
    this.filteStr = this.$route.params.keyword;
  }
};
</script>

<style lang="less">
.search_box {
  // float: left;
  // width: 30%;
  .header_search {
    // float: left;
    box-sizing: border-box;
    padding-left: 10px;
    width: 100%;
    height: 44px;
    color: rgb(210, 220, 255);
    margin-top: 13px;
    margin-left: 15px;
    border-radius: 7px;
    background: #222842;
    font-size: 14px;
    border: 2px solid #b0b4e4;
  }
  input::placeholder {
    color: rgb(184, 184, 184);
  }
  .search_logo {
    width: 30px;
    position: absolute;
    top: 14%;
    left: 26%;
    .el-icon-search {
      color: #b0b4e4;
    }
  }
}
</style>
