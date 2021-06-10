<template>
  <div class="tags-view-wrapper">
    <!-- <el-scrollbar :vertical="false" class="scroll-container">
          </el-scrollbar> -->
    <div class="tags-view-inner" ref="scrollContainer" @wheel="handleScroll">
      <div class="tag-item pointer">
        <span class="txt">首页</span>
        <i class="el-icon-close"></i>
      </div>
      <div class="tag-item">首页</div>
      <div class="tag-item" v-for="n in 30" :key="n">首页</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll(event) {
      // console.log('滚动111111', event.deltaY)
      this.$refs['scrollContainer'].scrollLeft += (event.deltaY / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  // overflow-y: scroll;
  width: 100%;
  .el-scrollbar__bar {
    bottom: 0px;
  }
  .el-scrollbar__wrap {
    height: 49px;
  }
}
.tags-view-wrapper {
  .tags-view-inner {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 40px;
    padding: 5px 0 0;
    position: relative;
  }
  .tag-item {
    flex-shrink: 0;
    font-size: 12px;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #eee;
    border-radius: 2px;
    &:first-child {
      margin-left: 10px;
    }
    &:last-child {
      margin-right: 10px;
    }
  }
}
</style>