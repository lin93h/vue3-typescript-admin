<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import HelloWorld from '@/components/HelloWorld.vue'

let locale = ref(zhCn)

</script>

<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-header>
        <div class="header-con">header</div>
      </el-header>
      <el-container>
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
      </el-container>
    </el-container>
  </el-config-provider>

</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
  height: 100vh;
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
