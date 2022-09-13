import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/login/index.vue')
    }
  ],
})

export default router
