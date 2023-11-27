import React, { useState } from 'react'

const CheckInput = ({ idCheckInputProps, titleCheckInputProps, checkedCheckInputProps }) => {
  const [checkedState, setCheckedState] = useState(checkedCheckInputProps)

  return (
    <div className="check-input">
      <input type='checkbox' id={idCheckInputProps} className="check-input__field" defaultChecked={checkedState}
        onClick={() => {checkedState ? setCheckedState(false) : setCheckedState(true)}} />
      <label htmlFor={idCheckInputProps} className="check-input__label">{titleCheckInputProps}</label>
    </div>
  )
}

export default CheckInput