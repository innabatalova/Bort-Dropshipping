import React, { useContext } from 'react'

import UserMenuItem from './UserMenuItem'
import { menuContext } from '../../context/menuContext'

const UserMenu = () => {
  const [contextMenu] = useContext(menuContext)

  const userMenuItemList = [['new-order', 'Новый заказ'], ['order-hist', 'История заказов'], ['API-doc', 'API документация'], ['bio', 'Личные данные'], ['catalog', 'Каталог'], ['feedback', 'Обратная связь']]
  const sortUserMenuItemList = userMenuItemList.map((item, index) =>
    <UserMenuItem key={index} classUserMenuItemProps={contextMenu === item[0] ? 'user-menu__item_active' : ''} titleUserMenuItemProps={item[1]} openUserMenuItemProps={item[0]} />
  )

  return (
    <div className="user-menu">
      {sortUserMenuItemList}
    </div>
  )
}

export default UserMenu