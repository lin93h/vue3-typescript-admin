import router from './router'
// import store from '@/store/index'

router.beforeEach((from, to, next) => {
  console.log(from, to)
  next()
})