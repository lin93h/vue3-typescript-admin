import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV,
  timeout: 15000
})

// 请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers['Authorization'] = 'Bearer '
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

enum HttpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

type MethodType = 'get' | 'post' | 'put' | 'delete'

interface HttpArgsType {
  method: MethodType,
  url: string,
  params: Record<string, unknown>
}
interface MethodsType {
  <T = any>(args: HttpArgsType): Promise<T>
}

const requese: MethodsType = (argument) => {
  let { method, url, params } = argument
  return instance[method](url, params)
}