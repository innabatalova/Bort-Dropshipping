import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { userAuthContext } from '../../context/UserAuthContext'

import FormInput from './FormInput'
import MainButton from '../main/MainButton'

import useCheckUser from '../../hooks/useCheckUser'

const Auth = () => {
  const regInputValues = [['email', 'Email', 'email'], ['password', 'Пароль', 'password']]
  const sortRegInputValues = regInputValues.map((item, index) =>
    <FormInput key={index} idFormInputProps={item[0]} titleFormInputProps={item[1]} typeFormInputProps={item[2]} />)

  const [ , setContextUserAuth] = useContext(userAuthContext)

  const navigate = useNavigate()
  const openProfile = () => { navigate('/profile') }

  return (
    <div className='auth'>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          const result = useCheckUser(values)
          setContextUserAuth(result)
          openProfile()
        }}>
        {() => (
          <Form className="auth__form">
            {sortRegInputValues}
            <MainButton classButtonProps='auth__button' titleButtonProps='Войти' />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Auth