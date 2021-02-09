<template>
  <div class="layout-wrapper flex-row">
    <div class="side-bar"></div>
    <div class="main-container">
      <div class="fixed-header">
        <div class="nav-bar"></div>
        <div class="tags-views"></div>
      </div>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .side-bar {
    width: 300px;
    height: 100%;
    background: blue;
  }
}
</style>
