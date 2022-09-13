<script lang="ts">
export default {
  name: "LayoutIndex",
}
</script>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import { RouterLink, RouterView, useRoute } from "vue-router"
import { ElConfigProvider, ElMessageBox } from "element-plus"
import { Fold, Expand, UserFilled, ArrowDown, Location } from "@element-plus/icons-vue"

import zhCn from "element-plus/lib/locale/lang/zh-cn"
import { useDark, useToggle } from "@vueuse/core"
import { login } from "@/api/common"

const route = useRoute()
const avatarUrl = ref("")
const isCollapse = ref(false)

onMounted(() => {
  console.log('aaaaaaa', route)
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleLogin = () => {
  let params = {
    user: "",
    password: '',
  }
  login(params).then((res) => {
    console.log("1111111111", res)
  })
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

let locale = ref(zhCn)

const activeIndex = ref("1")

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-config-provider :locale="locale">
    <el-container class="app-container">
      <el-aside :width="isCollapse ? '64px' : '220px'">
        <el-menu
          :default-active="activeIndex"
          :collapse="isCollapse"
          :collapse-transition="false"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <el-icon><Location></Location></el-icon>
            <template #title>Processing Center</template>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>Processing Center</span>
            </template>
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
      <el-main class="app-layout-main">
        <el-container>
          <el-header>
            <div class="header-con">
              <el-icon class="fold-expand">
                <Expand v-if="isCollapse" @click="isCollapse = false" />
                <Fold v-else @click="isCollapse = true" />
              </el-icon>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="user-bar">
                <el-dropdown>
                  <span class="avatar-box">
                    <el-avatar :size="35" :src="avatarUrl">
                      <el-icon><UserFilled /></el-icon>
                    </el-avatar>
                    {{ "用户名" }}
                    <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item disabled>Action 4</el-dropdown-item>
                      <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </el-header>
          <el-main>
            <el-scrollbar height="100%">
              <RouterView></RouterView>
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss">
@import "@/assets/base.css";

#app {
  height: 100vh;

  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #fff;
    .header-con {
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .fold-expand {
        font-size: 24px;
        cursor: pointer;
        margin-right: 20px;
      }
      .user-bar {
        flex-grow: 1;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        .avatar-box {
          cursor: pointer;
        }
      }
    }
  }
  .app-layout-main {
    padding: 0;
    border: none;
    background-color: #f0f2f5;
  }
  .el-aside {
    border: 1px solid #eee;
  }
}
</style>
