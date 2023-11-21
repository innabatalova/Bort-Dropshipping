import React from 'react'

import FormInput from './FormInput'
import CheckInput from './CheckInput'
import MainButton from './MainButton'

const Registration = () => {
  const linkCheckInputProps = <>Я согласен с <a href="#">Политикой Конфиденциальности</a></>

  const regInputValues = [['bio', 'ФИО', 'text'], ['inn', 'ИНН', 'text'], ['tel', 'Телефон', 'tel'], ['email', 'Email', 'email'], 
    ['password', 'Пароль', 'password'], ['password-double', 'Повтор пароля', 'password']]
  const sortRegInputValues = regInputValues.map((item, index) =>
    <FormInput key={index} idFormInputProps={item[0]} titleFormInputProps={item[1]} typeFormInputProps={item[2]} />)

  const regCheckboxValues = [['politics', linkCheckInputProps, true], ['news', 'Получать новости Bort по почте', true]]
  const sortRegCheckboxValues = regCheckboxValues.map((item, index) =>
    <CheckInput key={index} idCheckInputProps={item[0]} titleCheckInputProps={item[1]} checkedCheckInputProps={item[2]} />)

  return (
    <div className="registration">
      <form className="registration__form">
        {sortRegInputValues}
        {sortRegCheckboxValues}
        <MainButton classButtonProps='registration__button' titleButtonProps='Зарегистрироваться' />
      </form>
    </div>
  )
}

export default Registration