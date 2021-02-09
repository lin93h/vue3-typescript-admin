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
    const loginFormRef = ref(ElForm)
    const flag = ref(false)
    const onLogin = () => {
      loginFormRef.value.validate((valid: boolean) => {
        if (valid) {
          flag.value = true
        }
      })
    }

    return {
      loginFormRef,
      flag,
      onLogin
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
    handleLogin() {
      this.onLogin()
      if(this.flag) {
        this.$router.push('/home')
      }
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.login-wrapper {
  height: 100%;
  background: $blue;
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
