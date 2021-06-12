<template>
  <div class="side-bar">
    <el-menu :collapse="isCollapse" :router="true">
      <el-submenu :index="route.path" v-for="route in routes" :key="route.path">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{route.meta?.title}}</span>
        </template>
        <el-menu-item :index="route.path + child.path" v-for="child in route.children" :key="child.path">
          <span>{{child.meta?.title}}{{route.path + child.path}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>

</template>

<script>
import { asyncRoutes } from '@/router/index'

export default {
  data() {
    return {
      isCollapse: false,
      routes: asyncRoutes
    }
  },
  created() {
    console.log('1111111', this.routes, this.$router.options.routes)
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  flex-shrink: 0;
  width: 200px;
  height: 100%;
}
</style>