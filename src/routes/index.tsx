/*
 * @Author: Jason
 * @Date: 2023-11-10 09:33:03
 * @LastEditTime: 2023-11-10 16:52:19
 * @LastEditors: Jason
 */

import Home from "@/pages/Home/Home";
import Detail from "@/pages/Detail/Detail";
import List from "@/pages/List/List";

import { Navigate, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: 'list',
    element: <List />
  }
]

export default routes