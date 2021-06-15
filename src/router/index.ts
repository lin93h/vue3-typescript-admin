import { Router, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: { title: '首页', affix: true }
      }
    ]
  },

  {
    path: '/404',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "error404" */ '@/views/error/404.vue'),
    meta: { title: '404 NOT FOUND', hidden: true }
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'About',
    component: Layout,
    meta: { title: '关于' },
    children: [
      {
        path: 'adv',
        name: 'adv1',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: { title: '广告', affix: false }
      }
    ]
  }, {
    path: '/personal',
    name: 'personal',
    component: Layout,
    meta: { title: '个人中心' },
    children: [
      {
        path: 'adv',
        name: 'adv2',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
        meta: { title: '消息', affix: false }
      }
    ]
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404'
  // }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
