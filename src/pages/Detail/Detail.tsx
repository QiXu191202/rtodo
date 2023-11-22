/*
 * @Author: Jason
 * @Date: 2023-11-10 09:32:17
 * @LastEditTime: 2023-11-21 13:37:45
 * @LastEditors: Jason
 */
// import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const location = useLocation()
  const { pathname, state } = location
  console.log('location', pathname, state)

  const goBack = () => {
    window.history.back()
  }

  return (
    <div>
      <p>Detail</p>
      <button onClick={goBack}>点击回去</button>
    </div>
  )
}

export default Detail