import request from "@/utils/request"
import type { DataType } from "@/utils/request"

export function login(data: DataType) {
  return request({
    url: "/api/login",
    method: "post",
    data,
  })
}
