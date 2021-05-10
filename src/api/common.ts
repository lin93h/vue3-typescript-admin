import request from '@/utils/request'

export function graphicCode() {
  return request({
    method: 'post',
    url: 'getLoginCode'
  })
}