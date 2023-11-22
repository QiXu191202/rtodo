/*
 * @Author: Jason
 * @Date: 2023-11-10 09:31:48
 * @LastEditTime: 2023-11-22 16:22:58
 * @LastEditors: Jason
 */
// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.less'
// 图片
import Completed from '@/assets/icon/completed.png'
import Going from '@/assets/icon/going.png'
import Pending from '@/assets/icon/pending.png'
import All from '@/assets/icon/all.png'
import Add from '@/assets/icon/add.png'

const Home = () => {
  const navigate = useNavigate()

  const goDetail = () => {
    navigate('/detail', {
      state: {
        msg: 'This is from Home'
      }
    })
  }

  // 按钮组
  const buttonList = [
    {
      id: 1,
      name: 'All',
      icon: All,
      text: '全部'
    },
    {
      id: 2,
      name: 'Pending',
      icon: Pending,
      text: '待定'
    },
    {
      id: 3,
      name: 'Going',
      icon: Going,
      text: '进行中'
    },
    {
      id: 4,
      name: 'Completed',
      icon: Completed,
      text: '已完成'
    }
  ]


  return (
    <div className="home-page">
      {/* 标题 */}
      <div className="title">Todoooooo</div>
      {/* <button onClick={goDetail}>点击跳转</button> */}
      {/* 按钮组 */}
      <div className="button-wrap">
        {
          buttonList.map(val => (
            <div className="button" key={val.id}>
              <img className="icon" src={val.icon} alt="" />
              <span>{val.text}</span>
            </div>
          ))
        }
      </div>
      <span className="text">文字</span>
    </div>
  )
}

export default Home