/*
 * @Author: Jason
 * @Date: 2023-11-10 09:32:31
 * @LastEditTime: 2023-12-02 21:13:29
 * @LastEditors: Jason
 */
// import React from 'react'
import * as ListServer from '@/services/list'
import { useEffect, useState } from 'react'
import './List.less'

const List = () => {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<any[]>([])

  const getList = async () => {
    setLoading(true)
    const res: any = await ListServer.getList()
    setLoading(false)
    setList(res)
  }

  useEffect(() => {
    getList()
  }, [])
  // 列表数据
  const ListElement = () => {
    return (
      <>
        {
          list.map(val => <div className="list-item">{`${val.id}、${val.title.substring(0, 10)}`}</div>)
        }
      </>
    )
  }
  const NoData = () => {
    return <div>无数据</div>
  }
  const listComponent = loading ? <div>加载中...</div> : list.length ? <ListElement /> : <NoData />

  return (
    <div className="list-page">
      {
        listComponent
      }
    </div>
  )
}

export default List