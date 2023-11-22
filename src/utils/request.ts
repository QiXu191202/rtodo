/*
 * @Author: Jason
 * @Date: 2023-11-22 17:13:52
 * @LastEditTime: 2023-11-22 17:56:45
 * @LastEditors: Jason
 */

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/3297795-0-default',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  return config
}, error => {
  return error
})

instance.interceptors.response.use(res => {
  const { code } = res.data;
  if (code !== 200 && code !== 0 && code !== 2000) {
    console.log('请求成功，但被拦截的数据', res)
    throw res.data;
  }
  return res.data;
}, error => {
  return error;
})

const request = (method: string, url: string, params?: any, data?: any) => {
  return instance.request({
    method: method,
    url: url,
    params: params,
    data: data
  })
}

export default request