import React from 'react'

import OrderTableItem from './OrderTableItem'

const OrderTableItemMobile = ({ titleOrderTableItemMobileProps, valueOrderTableItemMobileProps }) => {
  return (
    <>
      <OrderTableItem classOrderTableItemProps='order-table__item_title' titleOrderTableItemProps={titleOrderTableItemMobileProps} />
      <OrderTableItem classOrderTableItemProps='' titleOrderTableItemProps={valueOrderTableItemMobileProps} />
    </>

  )
}

export default OrderTableItemMobile