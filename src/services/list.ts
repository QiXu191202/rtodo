/*
 * @Author: Jason
 * @Date: 2023-11-25 21:22:54
 * @LastEditTime: 2023-11-26 16:24:15
 * @LastEditors: Jason
 */

import request from "@/utils/request";

export const getList = () => {
  return new Promise(async (resolve) => {
    const res = await request(
      'get',
      '/posts'
    )
    console.log('接口数据', res)
    resolve(res)
  })
}