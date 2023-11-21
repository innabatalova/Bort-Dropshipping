import React from 'react'

const MainButton = ({ classButtonProps, titleButtonProps} ) => {
  return (
    <button className={`main-button ` + classButtonProps}>{titleButtonProps}</button>
  )
}

export default MainButton