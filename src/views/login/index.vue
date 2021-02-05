<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="box-title box-title box-titlebox-title box-title box-title box-title box-title box-title box-title box-title box-title">
        vue3-TS-ElementPlus后台管理系统</div>
      <div class="login-form">
        <el-input v-model="account"></el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      account: ''
    }
  }
})
</script>

<style lang="scss">
.login-wrapper {
  height: 100%;
  background: #fff;
  overflow: hidden;
}
</style>
