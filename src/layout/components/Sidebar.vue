<template>
  <div class="sidebar-wrapper" :class="sidebarCollapse ? 'sidebar-close' : ''">
    <el-menu :default-active="activeRoute" :collapse="sidebarCollapse" :router="true" :collapse-transition="false" :background-color="variables.menuBg"
             :text-color="variables.menuText" :unique-opened="true" :active-text-color="variables.menuActiveText">
      <template v-for="route in routes" :key="route.path">
        <el-submenu :index="route.path" v-if="!route.meta.hidden">
          <template #title>
            <i class="icon el-icon-location"></i>
            <span>{{route.meta?.title}}</span>
          </template>
          <template v-for="child in route.children" :key="child.path">
            <el-menu-item :index="route.path + '/' + child.path" v-if="!child.meta.hidden">
              <span>{{child.meta?.title}}{{route.path + child.path}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { asyncRoutes } from '@/router/index'
import { mapGetters } from 'vuex'
import variables from '@/assets/styles/variables.scss'

export default {
  data() {
    return {
      variables,
      isCollapse: false,
      activeRoute: '',
      routes: asyncRoutes
    }
  },
  computed: {
    ...mapGetters('app', [
      'sidebarCollapse'
    ])
  },
  created() {
    // console.log('1111111', this.$router.getRoutes())
    this.activeRoute = this.$route.path
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables';
.sidebar-wrapper {
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s;
  position: relative;
  background: $menuBg;
  .icon {
    color: $menuText;
    margin-right: 5px;
  }
  .is-active > .el-submenu__title {
    color: $subMenuActiveText!important;
    .icon {
      color: $subMenuActiveText;
    }
  }
}
.sidebar-close {
  width: 64px;
}
</style>