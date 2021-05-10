import axios, { AxiosResponse } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

// 服务端接口返回格式
interface ResponseData {
  code: number
  msg: string
  data?: unknown
}

type HttpResponse = AxiosResponse<ResponseData>

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
instance.interceptors.response.use((response: HttpResponse): HttpResponse => {
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
  }
  return data as any
}, (error) => {
  ElMessage.error(error.message)
  return Promise.reject(error)
})

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

interface HttpArgument {
  method: HttpMethod
  url: string
  data?: Record<string, unknown>
}

const request = (argument: HttpArgument) => {
  const { method, url, data } = argument
  return instance({
    method,
    url,
    data
  })
}

export default request