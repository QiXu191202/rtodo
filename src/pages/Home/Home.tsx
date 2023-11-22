/*
 * @Author: Jason
 * @Date: 2023-11-10 09:31:48
 * @LastEditTime: 2023-11-22 18:05:28
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

// 接口
import * as HomeServer from '@/services/home'

const Home = () => {
  const navigate = useNavigate()

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

  // test请求
  const getApi = () => {
    HomeServer.getList().then(res => {
      console.log('res', res)
    })
  }


  return (
    <div className="home-page">
      {/* 标题 */}
      <div className="title">Todoooooo</div>

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

      {/* 新增按钮 */}
      <img className='add' src={Add} alt="" onClick={getApi} />
    </div>
  )
}

export default Home