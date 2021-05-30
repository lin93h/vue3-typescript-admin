import axios, { ResponseType } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer '
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use((response) => {
  const { data } = response
  if (data.code === 305) {
    ElMessageBox.alert(data.msg, '提示', {
      type: 'warning',
      confirmButtonText: '重新登录',
      showClose: false,
      callback: () => {
        location.reload()
      }
    })
    return data
  } else if (data.code === 0) {
    return data
  } else {
    ElMessageBox.alert(data.msg, '提示', {
      type: 'error',
      confirmButtonText: '知道了'
    })
    return Promise.reject(data)
  }
}, (error) => {
  ElMessage.error(error.message)
  return Promise.reject(error)
})

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

interface HttpArgument {
  method: HttpMethod
  url: string
  data?: unknown
  headers?: Record<string, unknown>
  responseType?: ResponseType
}

const request = (argument: HttpArgument) => {
  const { method, url, data, headers, responseType } = argument
  return instance({
    method,
    url,
    data,
    headers,
    responseType
  })
}

export default request