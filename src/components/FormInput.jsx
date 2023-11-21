import React from 'react'

const FormInput = ({ idFormInputProps, titleFormInputProps, typeFormInputProps } ) => {
  return (
    <div className="form-input">
      <label htmlFor={idFormInputProps} className="form-input__label">{titleFormInputProps}</label>
      <input type={typeFormInputProps} id={idFormInputProps} className="form-input__field" />
    </div>
  )
}

export default FormInput