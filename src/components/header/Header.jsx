import React from 'react'

import Logo from '../../static/img/logo.svg'

const Header = ({ userHeaderProps }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo Bort" />
      </div>
      {userHeaderProps}
    </div>
  )
}

export default Header