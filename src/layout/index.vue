<script lang="ts">
export default {
  name: "LayoutIndex",
}
</script>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue"
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from "vue-router"
import { ElConfigProvider, ElMessageBox } from "element-plus"
import { Fold, Expand, UserFilled, ArrowDown } from "@element-plus/icons-vue"

import zhCn from "element-plus/lib/locale/lang/zh-cn"
import { useDark, useToggle } from "@vueuse/core"
import { login } from "@/api/common"
import dynamicRoute from '@/router/dynamic'
import MenuItem from '@/layout/menu/menuItem.vue'
import SubMenu from '@/layout/menu/subMenu.vue'
import logo from '@/assets/logo.svg'

const route = useRoute()
const avatarUrl = ref("")
const isCollapse = ref(false)
const breadcrumbData = ref<string[]>([])
const activeIndex = ref("")

watch(route, (newRoute) => {
  handleCurRoute()
})

onMounted(() => {
  activeIndex.value = route.path
  handleCurRoute()
})

const handleCurRoute = () => {
  const list = route.matched.map(item => {
    if (typeof item.meta.title === 'string' && item.meta.title) {
      return item.meta.title
    }
    return ''
  })
  breadcrumbData.value = list.filter(item => item)
}
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



const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-config-provider :locale="locale">
    <el-container class="app-container">
      <el-aside class="layout-aside" :width="isCollapse ? '64px' : '220px'">
        <div class="aside-header" style="background: #545c64">
          <img class="logo" :src="logo" alt="">
          <span class="app-name" v-if="!isCollapse">名称</span>
        </div>
        <el-menu router :default-active="activeIndex" :collapse="isCollapse" :collapse-transition="false"
          @select="handleSelect" active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
          <template v-for="item of dynamicRoute">
            <MenuItem v-if="!item.children?.length" :route="item">
            </MenuItem>
            <SubMenu v-else :route="item"></SubMenu>
          </template>
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
                <el-breadcrumb-item v-for="item of breadcrumbData">{{ item }}</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="user-bar">
                <el-dropdown>
                  <span class="avatar-box">
                    <el-avatar :size="35" :src="avatarUrl">
                      <el-icon>
                        <UserFilled />
                      </el-icon>
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

.app-container {
  height: 100vh;

  .layout-aside {
    display: flex;
    flex-flow: column nowrap;

    .aside-header {
      height: 80px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #fff;
    }

    .logo {
      width: 36px;
    }

    .app-name {
      font-size: 18px;
      font-weight: bold;
      margin-left: 5px;
    }

    .el-menu {
      flex-grow: 1;
    }
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
}
</style>
