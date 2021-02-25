<template>
  <div class="tags-view-wrapper">
    <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel="handleScroll">
      <div class="flex-row-center">
        <div class="tag-item pointer">
          <span class="txt">首页</span>
          <i class="el-icon-close"></i>
        </div>
        <div class="tag-item">首页</div>
        <div class="tag-item" v-for="n in 30" :key="n">首页</div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      console.log('滚动111111')
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  .el-scrollbar__bar {
    bottom: 0px;
  }
  .el-scrollbar__wrap {
    height: 49px;
  }
}
.tags-view-wrapper {
  // height: 40px;
  // background: #fff;
  // border-bottom: 1px solid #eee;
  // box-sizing: border-box;
  // padding: 0 10px;
  // overflow-y: hidden;
  // overflow-x: scroll;
  .tag-item {
    flex-shrink: 0;
    font-size: 12px;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #eee;
    border-radius: 2px;
  }
}
</style>