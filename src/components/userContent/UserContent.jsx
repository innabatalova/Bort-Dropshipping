import React, { useContext } from 'react'

import UserContentItem from './UserContentItem'
import OrderHist from './OrderHist'
import Bio from './Bio'
import APIDoc from './APIDoc'
import { menuContext } from '../../context/menuContext'

const UserContent = () => {
  const [contextMenu] = useContext(menuContext)

  const userMenuContentList = [['new-order', 'Новый заказ'], ['order-hist', <OrderHist />], ['API-doc', <APIDoc />], ['bio', <Bio/>], ['catalog', 'Каталог'], ['feedback', 'Обратная связь']]
  const sortUserMenuContentList = userMenuContentList.map((item, index) =>
    <UserContentItem key={index} classUserContentItemProps={contextMenu === item[0] ? 'user-content__item_active' : ''} childUserMenuItemProps={item[1]}/>
  )

  return (
    <div className="user-content">
      {sortUserMenuContentList}
    </div>
  )
}

export default UserContent