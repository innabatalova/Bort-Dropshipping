import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip'

import NavbarItem from './NavbarItem'

import { userAuthContext } from '../../context/UserAuthContext'

import QuestionIcon from '../../static/img/question-icon.svg'

const UserHeaderHavbar = () => {
  const [, setContextUserAuth] = useContext(userAuthContext)

  return (
    <div className="navbar">
      <NavbarItem hrefNavbarItemProps='#' classNavbarItemProps='' titleNavbarItemProps='Неизвестный юзер' clickNavbarItemProps={() => console.log('test!')} />
      <NavbarItem hrefNavbarItemProps='#' classNavbarItemProps='' titleNavbarItemProps='Ваш баланс: 19 955 р.' clickNavbarItemProps={() => console.log('test!')} />
      <NavbarItem hrefNavbarItemProps='#' classNavbarItemProps='' titleNavbarItemProps='Корзина' clickNavbarItemProps={() => console.log('test!')} />
      <NavbarItem hrefNavbarItemProps='#' classNavbarItemProps='navbar__item_noafter' titleNavbarItemProps='Выйти' clickNavbarItemProps={() => setContextUserAuth(false)} />
      <Tooltip title="Вопросистый вопрос" className='navbar__tooltip'>
        <img src={QuestionIcon} />
      </Tooltip>
    </div>

  )
}

export default UserHeaderHavbar