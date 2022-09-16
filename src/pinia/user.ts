import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem("token") || "")

  const setToken = (value: string) => {
    localStorage.setItem("token", value)
    token.value = value
  }

  return {
    token,
    setToken,
  }
})
