import React from 'react'
import { Field } from 'formik'

const FormInput = ({ idFormInputProps, titleFormInputProps, typeFormInputProps }) => {
  return (
    <div className='form-input'>
      <label htmlFor={idFormInputProps} className='form-input__label'>{titleFormInputProps}</label>
      <Field
        type={typeFormInputProps}
        id={idFormInputProps}
        name={idFormInputProps}
        className="form-input__field"
      />
    </div>
  )
}

export default FormInput