import React, { useContext } from 'react'

import UserContentItem from './UserContentItem'
import { menuContext } from '../../context/menuContext'

const UserContent = () => {
  const [contextMenu] = useContext(menuContext)

  const userMenuContentList = [['new-order', 'Новый заказ'], ['order-hist', 'История заказов'], ['API-doc', 'API документация'], ['bio', 'Личные данные'], ['catalog', 'Каталог'], ['feedback', 'Обратная связь']]
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