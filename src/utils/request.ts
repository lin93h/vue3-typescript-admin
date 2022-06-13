import axios from 'axios'
import { ElMessageBox } from 'element-plus'

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})

instance.interceptors.request.use(config => {
  console.log('请求拦截配置信息', config)
  config.headers = {
    'Authorization': 'Bearer aaaaaaaaaaaaaa',
    'x-token': 'bbbbbbbbbbb'
  }
  return config
}, error => {
  console.log('请求拦截ERROR：', error)
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  console.log('响应拦截：', response)
  
  return response
}, error => {
  console.log("响应拦截ERROR:", error)
  // const { status, data } = error.response
  // if(status === 401) {
  //   console.log('zzzzzzzzzz', status, data)
  //   ElMessageBox.alert(data.msg, '提示', {
  //     type: 'error',
  //   })
  // }
  return Promise.reject(error)
})

export default instance