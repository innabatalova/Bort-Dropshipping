import React from 'react'

const UserContentItem = ({ classUserContentItemProps, childUserMenuItemProps }) => {
  return (
    <div className={`user-content__item ` + classUserContentItemProps}>
      {childUserMenuItemProps}
    </div>
  )
}

export default UserContentItem