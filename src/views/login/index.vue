<template>
  <div class="login-wrapper flex-row-center-center">
    <div class="login-box">
      <div class="box-title">vue3-TS-ElementPlus后台管理系统</div>
      <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item label="账号" prop="account">
          <el-input v-model="loginForm.account" clearable> </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" show-password> </el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-btn" type="primary" @click="handleLogin">
        登录
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, ref, reactive } from 'vue'
type ElFormRule = Pick<InstanceType<typeof ElForm>, 'rules'>['rules']

export default defineComponent({
  name: 'Login',
  setup() {
    const loginFormRef = ref<InstanceType<typeof ElForm>>()
    const loginForm = reactive({
      account: '',
      password: ''
    })

    const checkAccount = (rule: ElFormRule, value: string, callback: Function) => {
      if (!value) {
        callback(new Error('不可少于4个字符'))
      } else {
        callback()
      }
    }
    const loginRules = reactive({
      account: [
        { required: true, message: '请输入', trigger: 'blur' },
        { validator: checkAccount, trigger: 'blur' }
      ],
      passowrd: [{ required: true, message: '请输入', trigger: 'blur' }]
    })

    const handleLogin = () => {
      loginFormRef.value?.validate((valid) => {
        if (valid) {
        }
      })
    }
    return {
      loginFormRef,
      loginRules,
      loginForm,
      handleLogin
    }
  },
  data() {
    return {}
  }
})
</script>

<style lang="scss">
.login-wrapper {
  height: 100%;
  background: #002766;
  overflow: hidden;
  .login-box {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
