/*
 * @Author: Jason
 * @Date: 2023-11-22 17:13:52
 * @LastEditTime: 2023-11-23 11:12:04
 * @LastEditors: Jason
 */

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
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
  const { status } = res;
  if (status !== 200 && status !== 0 && status !== 2000) {
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