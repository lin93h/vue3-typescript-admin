import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem("token") || "")

  const setToken = (token: string) => {
    localStorage.setItem("token", token)
  }

  return {
    token,
    setToken,
  }
})
