<template>
  <div class="nav-bar-wrapper flex-row-center-between">
    <div class="section flex-row-center-between">
      <div class="sidebar-switch">
        <i class="switch pointer el-icon-s-fold"></i>
      </div>
      <div class="crumbs-nav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tool-bar flex-row-center-between">
      <el-dropdown trigger="click">
        <el-avatar class="pointer" shape="square" :src="avatar"></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Avatar from '@/assets/logo.png'
import { logout } from '@/api/user'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      avatar: Avatar
    }
  },
  methods: {
    ...mapActions('user', [
      'clearState'
    ]),
    handleOut() {
      logout().then(() => {
        this.$alert('确定退出当前用户吗？', '退出提示', {
          type: 'warning'
        }).then(() => {
          this.clearState()
          this.$router.replace('/login')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar-wrapper {
  height: 50px;
  padding: 0 10px;
  background: #fff;
  border-bottom: 1px solid #eee;
  .sidebar-switch {
    margin-right: 10px;
  }
  .tool-bar {
    padding-top: 10px;
  }
}
</style>