import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
  const token = ref("")

  const handleSetToken = (token: string) => {
    localStorage.setItem("token", token)
  }

  return {
    token,
    handleSetToken,
  }
})
