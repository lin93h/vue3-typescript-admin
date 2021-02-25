<template>
  <div class="layout-wrapper flex-row">
    <sidebar></sidebar>
    <div class="main-container flex-column">
      <div class="fixed-header flex-column">
        <nav-bar></nav-bar>
        <tags-view></tags-view>
      </div>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layout/components/Sidebar'
import NavBar from '@/layout/components/NavBar'
import TagsView from '@/layout/components/TagsView'

export default {
  components: {
    Sidebar,
    NavBar,
    TagsView
  }
}
</script>

<style lang="scss">
.layout-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .main-container {
    flex-grow: 1;
    overflow: hidden;
  }
}
</style>
