import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Modal from '@mui/material/Modal'

import FormInput from './FormInput'
import CheckInput from './CheckInput'
import MainButton from '../main/MainButton'

import useCreateUser from '../../hooks/useCreateUser'

const Registration = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const linkCheckInputProps = <>Я согласен с <a href="#">Политикой Конфиденциальности</a></>

  const regInputValues = [['bio', 'ФИО', 'text'], ['inn', 'ИНН', 'text'], ['tel', 'Телефон', 'tel'], ['email', 'Email', 'email'],
  ['password', 'Пароль', 'password'], ['passwordDouble', 'Повтор пароля', 'password']]
  const sortRegInputValues = regInputValues.map((item, index) =>
    <FormInput key={index} idFormInputProps={item[0]} titleFormInputProps={item[1]} typeFormInputProps={item[2]} />)

  const regCheckboxValues = [['politics', linkCheckInputProps, true], ['news', 'Получать новости Bort по почте', true]]
  const sortRegCheckboxValues = regCheckboxValues.map((item, index) =>
    <CheckInput key={index} idCheckInputProps={item[0]} titleCheckInputProps={item[1]} checkedCheckInputProps={item[2]} />)

  return (
    <div className="registration">
      <Formik
        initialValues={{ bio: '', inn: '', tel: '', email: '', password: '', passwordDouble: '' }}
        onSubmit={(values, { resetForm }) => {
          useCreateUser(values)
          resetForm()
          handleOpen(true)
        }}>
        {() => (
          <Form className="registration__form">
            {sortRegInputValues}
            {sortRegCheckboxValues}
            <MainButton classButtonProps='registration__button' titleButtonProps='Зарегистрироваться' />
          </Form>
        )}
      </Formik>
      <Modal
        open={open}
        onClose={handleClose}>
        <div className="info-modal">
          <h3 className="info-modal__title">Вы успешно зарегистрировались!</h3>
          <button className='main-button info-modal__button' onClick={() => handleClose(false)}>Ok</button>
        </div>
      </Modal>
    </div>
  )
}

export default Registration