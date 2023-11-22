/*
 * @Author: Jason
 * @Date: 2023-11-22 17:50:26
 * @LastEditTime: 2023-11-22 17:58:21
 * @LastEditors: Jason
 */

import request from "@/utils/request";

export const getList = () => {
  return request(
    'get',
    '/api/testApi'
  )
}