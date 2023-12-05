import React from 'react'

const MainTitle = ({ classMainTitleProps, titleMainTitleProps }) => {
  return (
    <h3 className={`main-title ` + classMainTitleProps}>{titleMainTitleProps}</h3>
  )
}

export default MainTitle