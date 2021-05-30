import request from '@/utils/request'

// 参数类型
type ParamsType = Record<string, unknown>

export function graphicCode() {
  return request({
    method: 'post',
    url: 'getLoginCode'
  })
}