import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [{
      name: 'Dashboard',
      path: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
      meta: { title: '首页', affix: true }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      meta: { title: '关于', affix: false }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
      meta: { title: '个人中心', affix: false }
    }]
  },

  {
    path: '/404',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "error404" */ '@/views/error/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
