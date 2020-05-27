<!-- 这是查询全部的页面 -->
<template>
  <div class="allWrap">
    <div class="content_left">
      <div class="article_block">
          <h3>
            <a
              target="_self"
              href=""
              title="sdjjisjdsusdhu实际上仅仅是技术奇数"
            >fffffsssss</a>
          </h3>
        <p class="meta">
          <time>
            <i class="el-icon-alarm-clock">
            </i>
            20200519
          </time>
          <span class="read">
            <i class="el-icon-info"></i>
            阅读(2222)
          </span>
        </p>
        <p class="note">
          <a href="" target="_self">

          </a>
         //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
         //例如：import 《组件名称》 from '《组件路径》';
        </p>
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
    return {};
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
<style lang='less' scoped>
//@import url(); 引入公共css类
.allWrap {
  background-color: white;
  .content_left {
    position: relative;
    min-height: 500px;
    margin-right: 380px;
    margin-bottom: 15px;
    .article_block {
      border: 1px solid #eaeaea;
      padding: 20px 20px 20px 215px;
      overflow: hidden;
      background-color: #fff;
      margin-bottom: -1px;
      header {
        margin-bottom: 10px;
        h2 {
          display: inline;
          font-size: 18px;
          line-height: 1.4;
          font-weight: bold;
        }
      }
    }
  }
}
</style>