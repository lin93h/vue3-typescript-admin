<template>
  <div class="tags-view-wrapper flex-row-center">
    <div class="tag-item pointer">
      <span class="txt">首页</span>
      <i class="el-icon-close"></i>
    </div>
    <div class="tag-item">首页</div>
    <div class="tag-item" v-for="n in 30" :key="n">首页</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tags-view-wrapper {
  height: 40px;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 10px;
  overflow: scroll;
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