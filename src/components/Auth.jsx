import React from 'react'

import FormInput from './FormInput'
import MainButton from './MainButton'

const Auth = () => {
  const regInputValues = [['email', 'Email', 'email'], ['password', 'Пароль', 'password']]
  const sortRegInputValues = regInputValues.map((item, index) =>
    <FormInput key={index} idFormInputProps={item[0]} titleFormInputProps={item[1]} typeFormInputProps={item[2]} />)

  return (
    <div className='auth'>
      <form className="auth__form">
        {sortRegInputValues}
        <MainButton classButtonProps='auth__button' titleButtonProps='Войти' />
      </form>
    </div>
  )
}

export default Auth