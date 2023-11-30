import React, { useContext } from 'react'
import { Formik, Form } from 'formik'

import FormInput from '../onBoard/FormInput'
import MainButton from './MainButton'

import useSetUser from '../../hooks/useSetUser'
import useGetUser from '../../hooks/useGetUser'

import { modalFormContext } from '../../context/modalFormContext'

const ModalForm = ({ openModalFormProps, titleModalFormProps, btnModalFormProps, initialModalFormProps, dataModalFormProps }) => {
  const [, setContextOpenModal] = useContext(modalFormContext)

  const sortUserDataInputValues = dataModalFormProps.map((item, index) =>
    <FormInput key={index} idFormInputProps={item[0]} titleFormInputProps={item[1]} typeFormInputProps={item[2]} />)

  const handleSubmit = (values) => {
    const changeUser = useGetUser()
    for (var item in values) {
      changeUser[item] !== values[item] ? changeUser[item] = values[item] : changeUser[item]
    }
    useSetUser(changeUser)
    setContextOpenModal('')
  }

  return (
    <div className={`modal-overlay ` + openModalFormProps}>
      <div className="modal-form">
        <h3 className="modal-form__title">{titleModalFormProps}</h3>
        <Formik
          initialValues={initialModalFormProps}
          onSubmit={handleSubmit}>
          {() => (
            <Form >
              {sortUserDataInputValues}
              <MainButton classButtonProps='modal-form__button' titleButtonProps={`Изменить ` + btnModalFormProps} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ModalForm