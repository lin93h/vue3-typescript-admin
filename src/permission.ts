import router from "@/router"
import { useUserStore } from "@/pinia/user"

const whiteList = ["login"]

router.beforeEach((to, from, next) => {
  const useUser = useUserStore()
  const token = useUser.token
  if (token) {
    if (to.name === "login") {
      next({ name: "dashboard" })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.name as string)) {
      next()
    } else {
      next({ name: "login" })
    }
  }
})
