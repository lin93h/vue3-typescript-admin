import type { RouteRecordRaw } from "vue-router"

const dynamic: RouteRecordRaw[] = [
  {
    path: "dashborad",
    name: "dashboard",
    component: () => import("@/views/dashboard/index.vue"),
    meta: {
      title: "首页",
      icon: "House",
    },
  },
  {
    path: "/home2",
    name: "Dashboard2",
    component: () => import("@/views/dashboard/index.vue"),
    meta: {
      title: "首页2",
      icon: "Folder",
    },
    children: [
      {
        path: "/home21",
        name: "Dashboard21",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "首页21",
          icon: "Folder",
        },
      },
    ],
  },
  {
    path: "/home3",
    name: "Dashboard3",
    component: () => import("@/views/dashboard/index.vue"),
    meta: {
      title: "首页3",
      icon: "Folder",
    },
  },
]
export default dynamic
