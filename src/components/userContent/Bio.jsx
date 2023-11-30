import React, { useContext } from 'react'

import BioItem from './BioItem'
import ModalForm from '../main/ModalForm'

import useGetUser from '../../hooks/useGetUser'

import { modalFormContext } from '../../context/modalFormContext'

const Bio = () => {
  const [contextOpenModal, setContextOpenModal] = useContext(modalFormContext)
  
  const getUserData = useGetUser()

  const userDataProps = [['bio', 'ФИО', 'text'], ['inn', 'ИНН', 'text'], ['tel', 'Телефон', 'tel'], ['email', 'Email', 'email']]
  const userPasswordProps = [['passwordOld', 'Старый пароль', 'password'], ['password', 'Новый пароль', 'password'],
  ['passwordDoubleNew', 'Повтор пароля', 'password']]

  const bioInputValues = [['bio', 'ФИО', getUserData.bio], ['inn', 'ИНН', getUserData.inn],
  ['tel', 'Телефон', getUserData.tel], ['email', 'Email', getUserData.email],
  ['password', 'Пароль', getUserData.password]]
  const sortBioInputValues = bioInputValues.map((item, index) =>
    <BioItem key={index} idBioItemProps={item[0]} titleBioItemProps={item[1]} valueBioItemProps={item[2]} />)

  return (
    <div className="bio">
      <div className="bio__form">
        {sortBioInputValues}
        <div className="bio__btn__wrapper">
          <button type='button' className='main-button bio__button' onClick={() => setContextOpenModal('data')}>Изменить данные</button>
          <button type='button' className='main-button bio__button' onClick={() => setContextOpenModal('password')}>Изменить пароль</button>
        </div>
      </div>
      <div className="bio__links">
        <a className="bio__link" href="">Скачать договор оферты</a>
        <a className="bio__link" href="">Скачать условия Политики кондифициальности</a>
      </div>
      <ModalForm openModalFormProps={contextOpenModal === 'data' ? 'modal-overlay_active' : ''} titleModalFormProps='Ваши данные' initialModalFormProps={getUserData} btnModalFormProps=' данные' dataModalFormProps={userDataProps} />
      <ModalForm openModalFormProps={contextOpenModal === 'password' ? 'modal-overlay_active' : ''} titleModalFormProps='Ваш пароль' initialModalFormProps={getUserData} btnModalFormProps=' пароль' dataModalFormProps={userPasswordProps} />
    </div>
  )
}

export default Bio