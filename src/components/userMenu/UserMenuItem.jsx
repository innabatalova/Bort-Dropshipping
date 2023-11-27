import React, { useContext } from 'react'

import { menuContext } from '../../context/menuContext'

const UserMenuItem = ({ classUserMenuItemProps, titleUserMenuItemProps, openUserMenuItemProps }) => {
  const [, setContextMenu] = useContext(menuContext)

  return (
    <div className={`user-menu__item ` + classUserMenuItemProps} onClick={() => setContextMenu(openUserMenuItemProps)}>
      <span>{titleUserMenuItemProps}</span>
    </div>
  )
}

export default UserMenuItem