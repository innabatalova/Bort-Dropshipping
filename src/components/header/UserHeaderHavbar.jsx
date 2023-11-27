import React from 'react'
import Tooltip from '@mui/material/Tooltip'

import NavbarItem from './NavbarItem'

import QuestionIcon from '../../static/img/question-icon.svg'

const UserHeaderHavbar = () => {
  return (
    <div className="navbar">
      <NavbarItem hrefNavbarItemProps='#' classNavbarItemProps='' titleNavbarItemProps='Неизвестный юзер' clickNavbarItemProps={() => console.log('test!')} />
      <NavbarItem hrefNavbarItemProps='#' classNavbarItemProps='navbar__item_noafter' titleNavbarItemProps='Ваш баланс: 19 955 р.' clickNavbarItemProps={() => console.log('test!')} />
      <Tooltip title="Вопросистый вопрос">
          <img src={QuestionIcon} />
      </Tooltip>
    </div>

  )
}

export default UserHeaderHavbar