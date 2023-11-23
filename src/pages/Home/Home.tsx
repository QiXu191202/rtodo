/*
 * @Author: Jason
 * @Date: 2023-11-10 09:31:48
 * @LastEditTime: 2023-11-23 11:36:04
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
  // 跳转
  const skipPage = (page: string, state?: any) => {
    console.log('跳转的页面', page)
    navigate(page, {
      state: state || ''
    })
  }

  // 按钮组
  const buttonList = [
    {
      id: 1,
      name: 'All',
      icon: All,
      text: '全部',
      page: '/list'
    },
    {
      id: 2,
      name: 'Pending',
      icon: Pending,
      text: '待定',
      page: '/pending'
    },
    {
      id: 3,
      name: 'Going',
      icon: Going,
      text: '进行中',
      page: '/going'
    },
    {
      id: 4,
      name: 'Completed',
      icon: Completed,
      text: '已完成',
      page: '/completed'
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
            <div className="button" key={val.id} onClick={() => skipPage(val.page)}>
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