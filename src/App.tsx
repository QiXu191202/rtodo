/*
 * @Author: Jason
 * @Date: 2023-11-10 09:24:00
 * @LastEditTime: 2023-11-10 17:55:56
 * @LastEditors: Jason
 */
import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '@/routes'

const App = () => {
  const GetRoutes = () => useRoutes(routes)

  return (
    <BrowserRouter>
      <GetRoutes></GetRoutes>
    </BrowserRouter>
  )
}

export default App
