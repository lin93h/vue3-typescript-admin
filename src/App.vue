<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { ElConfigProvider, ElMessageBox } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import HelloWorld from '@/components/HelloWorld.vue'

import { useDark, useToggle } from '@vueuse/core'
import { login } from '@/api/common'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleLogin = () => {
  ElMessageBox.alert('1111', 'ttt', {
    type: 'warning',
    callback: () => {}
  })
  let params = {
    user: '',
    password: ''
  }
  // login(params).then(res => {
  //   console.log('1111111111', res)
  // })
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

let locale = ref(zhCn)

const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <el-config-provider :locale="locale">
    <el-container class="app-container">
      <el-aside>
        <el-menu :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-container>
          <el-header>
            <div class="header-con">header
              <el-icon>
                <AddLocation />
              </el-icon>
              <el-button @click="toggleDark()">{{ isDark ? 'Dark' : 'Light' }}</el-button>
              <el-button @click="handleLogin">登录</el-button>
            </div>
          </el-header>
          <el-main>
            <el-scrollbar height="100%">
              <el-skeleton />
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
  height: 100vh;

  .el-container {
    height: 100%;
  }

  .el-header {
    border: 1px solid #eee;
  }

  .el-aside {
    border: 1px solid #eee;
  }

  .el-main {
    border: 1px solid #eee;
  }
}
</style>
