import request from '@/utils/request'

// 参数类型
type ParamsType = Record<string, unknown>

export function login(data: ParamsType) {
  return request({
    method: 'post',
    url: 'login',
    data
  })
}

export function getUserInfo() {
  return request({
    method: 'post',
    url: 'getUserInfo'
  })
}