import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"
import dynamic from "./dynamic"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/login',
      component: Layout,
      meta: {},
      children: dynamic
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/login/index.vue')
    },
  ],
})

export default router
