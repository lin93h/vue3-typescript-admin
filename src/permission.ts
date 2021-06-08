import router from './router'
import store from '@/store/index'

router.beforeEach((from, to, next) => {
  const token = store.getters.token
  console.log(token, from, to)
  next()
})