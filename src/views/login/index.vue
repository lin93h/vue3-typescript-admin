<script lang="ts">
export default {
  name: "login",
}
</script>

<script setup lang="ts">
import { useUserStore } from "@/pinia/user"
import { useRouter } from "vue-router"
import { login } from "@/api/common"
import { reactive, ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"

const router = useRouter()
const useUser = useUserStore()

const userFormRef = ref<FormInstance>()
const userForm = ref({
  user: "manu",
  password: "123",
})

const rules = reactive<FormRules>({
  user: [{ required: true, trigger: "change", message: "请输入" }],
  password: [{ required: true, trigger: "change", message: "请输入" }],
})

const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      login(userForm.value).then((res) => {
        useUser.setToken("9527")
        router.push({ path: "/dashborad" })
      })
    }
  })
}
</script>

<template>
  <div class="app-page login-wrapper">
    <el-form ref="userFormRef" :model="userForm" :rules="rules">
      <el-form-item label="User" prop="user">
        <el-input v-model="userForm.user" clearable></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="userForm.password" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin(userFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
.login-wrapper {
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>
