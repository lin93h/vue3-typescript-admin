<script lang="ts">
export default {
  name: "login",
}
</script>

<script setup lang="ts">
import { useUserStore } from "@/stores/user"
import { useRouter } from "vue-router"

const router = useRouter()
const useUser = useUserStore()

const handleLogin = () => {
  useUser.setToken("9527")
  router.push({ path: "/dashborad" })
}
</script>

<template>
  <div class="app-page login-wrapper">
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<style lang="scss"></style>
