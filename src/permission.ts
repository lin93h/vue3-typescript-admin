import router from "@/router"
import { useUserStore } from "@/pinia/user"

router.beforeEach((to, from, next) => {
  console.log("11111", to, from)
  const useUser = useUserStore()
  const token = useUser.token
  if (token) {
    if (to.name === "Login") {
      next({ name: "dashboard" })
    } else {
      next()
    }
  } else {
    next({ name: "login" })
  }
})
