import React from 'react'

import Logo from '../static/img/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo Bort" />
      </div>
    </div>
  )
}

export default Header