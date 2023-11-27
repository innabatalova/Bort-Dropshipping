import React from 'react'

import UserMenu from '../userMenu/UserMenu'
import UserContent from '../userContent/UserContent'

const Main = () => {
  return(
    <div className="main">
      <UserMenu/>
      <UserContent />
    </div>
  )
}

export default Main