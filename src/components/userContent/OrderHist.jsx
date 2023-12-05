import React from 'react'

import MainTitle from '../main/MainTitle'
import MainButton from '../main/MainButton'
import OrderTableItem from './OrderTableItem'
import OrderTableItemMobile from './OrderTableItemMobile'

const OrderHist = () => {
  const linkProps = <a href='#' className='order-hist__link'>Подробнее &gt;&gt;</a>
  const orderTableItemTitleList = [['order-table__item_title', 'Номер заказа'], ['order-table__item_title', 'Дата оформления'],
  ['order-table__item_title', 'Статус'], ['order-table__item_title', 'Покупатель'],
  ['order-table__item_title', 'Способ получения'], ['order-table__item_title order-table__item_min', 'Итого'],
  ['order-table__item_title order-table__item_min', '']]
  const sortOrderTableItemTitleList = orderTableItemTitleList.map((item, index) =>
    <OrderTableItem key={index} classOrderTableItemProps={item[0]} titleOrderTableItemProps={item[1]} />
  )
  const orderTableItemOneList = [['', '№ 000-123-2645'], ['', '20 фев. 2022'],
  ['', 'Выполнен'], ['', 'Самойлов И.Г.'],
  ['', 'Доставка курьером'], ['order-table__item_min', '46 000'],
    ['order-table__item_min', linkProps]]
  const sortOrderTableItemOneList = orderTableItemOneList.map((item, index) =>
    <OrderTableItem key={index} classOrderTableItemProps={item[0]} titleOrderTableItemProps={item[1]} />
  )
  const orderTableItemTwoList = [['', '№ 000-657-2453'], ['', '12 авг. 2023'],
  ['', 'Выполнен'], ['', 'Леругер С.П.'],
  ['', 'Самовывоз'], [' order-table__item_min', '58 000'],
    [' order-table__item_min', linkProps]]
  const sortOrderTableItemTwoList = orderTableItemTwoList.map((item, index) =>
    <OrderTableItem key={index} classOrderTableItemProps={item[0]} titleOrderTableItemProps={item[1]} />
  )
  const orderTableItemMobileOneList = [['Номер заказа', '№ 000-123-2645'], ['Дата оформления', '20 фев. 2022'],
    ['Статус', 'Выполнен'], ['Покупатель', 'Самойлов И.Г.'],
    ['Способ получения', 'Доставка курьером'], ['Итого', '46 000']]
  const sortOrderTableItemMobileOneList = orderTableItemMobileOneList.map((item, index) =>
    <OrderTableItemMobile key={index} titleOrderTableItemMobileProps={item[0]} valueOrderTableItemMobileProps={item[1]} />
  )
  const orderTableItemMobileTwoList = [['Номер заказа', '№ 000-657-2453'], ['Дата оформления', '12 авг. 2023'],
    ['Статус', 'Выполнен'], ['Покупатель', 'Леругер С.П.'],
    ['Способ получения', 'Самовывоз'], ['Итого', '58 000']]
  const sortOrderTableItemMobileTwoList = orderTableItemMobileTwoList.map((item, index) =>
    <OrderTableItemMobile key={index} titleOrderTableItemMobileProps={item[0]} valueOrderTableItemMobileProps={item[1]} />
  )

  return (
    <div className='order-hist'>
      <MainTitle classMainTitleProps='order-hist__title' titleMainTitleProps='Отследить Заказ' />
      <input type="text" className="order-hist__search" placeholder='Введите номер' />
      <MainButton classButtonProps='order-hist__button' titleButtonProps='Найти' />
      <MainTitle classMainTitleProps='order-hist__title' titleMainTitleProps='Ваши заказы' />
      <div className="order-table">
        <div className="order-table__row">
          {sortOrderTableItemTitleList}
        </div>
        <div className="order-table__row">
          {sortOrderTableItemOneList}
        </div>
        <div className="order-table__row">
          {sortOrderTableItemTwoList}
        </div>
        <div className="order-table__row order-table__row_mobile">
          {sortOrderTableItemMobileOneList}
        </div>
        <div className="order-table__row order-table__row_mobile">
          {sortOrderTableItemMobileTwoList}
        </div>
      </div>
    </div>
  )
}

export default OrderHist