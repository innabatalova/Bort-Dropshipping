import React from 'react'

const NavbarItem = ({ hrefNavbarItemProps, classNavbarItemProps, titleNavbarItemProps, clickNavbarItemProps }) => {
  return (
    <a href={hrefNavbarItemProps} className={`navbar__item ` + classNavbarItemProps} onClick={clickNavbarItemProps}>{titleNavbarItemProps}</a>
  )
}

export default NavbarItem