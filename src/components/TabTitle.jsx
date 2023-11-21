import React from 'react'

const TabTitle = ({ classTabTitleProps, titleTabTitleProps, clickTabTitleProps } ) => {
  return(
    <div className={`tab-title ` + classTabTitleProps} onClick={clickTabTitleProps}>{titleTabTitleProps}</div>
  )
}

export default TabTitle