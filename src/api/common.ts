import request from "@/utils/request"
import type { DataType } from "@/utils/request"

export function register(data: DataType) {
  return request({
    url: "/api/register",
    method: "post",
    data,
  })
}

export function login(data: DataType) {
  return request({
    url: "/api/login",
    method: "post",
    data,
  })
}
