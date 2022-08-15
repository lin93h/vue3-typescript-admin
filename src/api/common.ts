import request from "@/utils/request"

interface LoginParams {
  user: string
  password: string
}
export function login(data: LoginParams) {
  return request({
    url: "/api/login",
    method: "post",
    data,
  })
}
