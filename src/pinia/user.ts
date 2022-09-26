import { defineStore } from "pinia"
import { ref } from "vue"
import router from "@/router/index"

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem("token") || "")

  const setToken = (value: string) => {
    localStorage.setItem("token", value)
    token.value = value
  }

  const signOut = () => {
    setToken("")
    router.push({ path: "/login" })
  }

  return {
    token,
    setToken,
    signOut,
  }
})
