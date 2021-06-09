import router from './router'
import store from '@/store/index'
import { GettersType } from '@/store/getters'

const whiteList: Array<string> = ['/login']

router.beforeEach((to, from, next) => {
  const getters = store.getters as GettersType
  if(getters.token) {
    if(getters.roles.length) {
      next()
    } else {
      store.dispatch('user/getUser').then(() => {
        next()
      })
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
    }
  }
})