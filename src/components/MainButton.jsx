import React from 'react'

const MainButton = ({ classButtonProps, titleButtonProps } ) => {
  return (
    <button type='submit' className={`main-button ` + classButtonProps} >{titleButtonProps}</button>
  )
}

export default MainButton