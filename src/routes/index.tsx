/*
 * @Author: Jason
 * @Date: 2023-11-10 09:33:03
 * @LastEditTime: 2023-11-23 11:47:38
 * @LastEditors: Jason
 */

import Home from "@/pages/Home/Home";
import Detail from "@/pages/Detail/Detail";
import List from "@/pages/List/List";
import Completed from "@/pages/Completed/Completed";
import Going from "@/pages/Going/Going";
import Pending from "@/pages/Pending/Pending";

import { Navigate, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'detail',
    element: <Detail />
  },
  {
    path: 'list',
    element: <List />
  },
  {
    path: 'completed',
    element: <Completed />
  },
  {
    path: 'going',
    element: <Going />
  },
  {
    path: 'pending',
    element: <Pending />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default routes