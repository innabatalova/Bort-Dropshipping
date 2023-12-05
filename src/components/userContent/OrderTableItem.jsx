import React from 'react'

const OrderTableItem = ({ classOrderTableItemProps, titleOrderTableItemProps }) =>{
  return(
    <div className={`order-table__item ` + classOrderTableItemProps}>{titleOrderTableItemProps}</div>
  )
}

export default OrderTableItem