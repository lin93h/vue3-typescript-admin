<template>
  <div class="login-wrapper flex-row-center-center">
    <div class="login-box">
      <div class="box-title">vue3-TS-ElementPlus后台管理系统</div>
      <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item label="账号" prop="account">
          <el-input v-model="loginForm.account" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, ref } from 'vue'
interface LoginForm {
  account: string
  password: string
}

export default defineComponent({
  name: 'Login',
  setup() {
    const loginFormRef = ref<InstanceType<typeof ElForm>>()
    // const loginFormRef = (el: InstanceType<typeof ElForm>) => {
    //   formRef.value = el
    // }
    const handleLogin = () => {
      loginFormRef.value?.validate((valid): void => {
        if(valid) {
        }
      })
    }
    return {
      loginFormRef,
      handleLogin
    }
  },
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      } as LoginForm,
      loginRules: {
        account: [{ required: true, message: '请输入', trigger: 'blur' }],
        passowrd: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // handleLogin() {
    //   (this.$refs.loginFormRef as typeof ElForm).validate((valid: boolean) => {
    //     console.log('111111', valid)
    //     if(valid) {}
    //   })
    //   // this.onLogin()
    //   // if (this.flag) {
    //   //   this.$router.push('/')
    //   // }
    // }
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
