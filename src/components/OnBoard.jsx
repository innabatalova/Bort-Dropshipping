import React from 'react'

import StartForm from './StartForm'

const OnBoard = () => {
  return (
    <div className="on-board">
      <StartForm/>
      <div className="on-board__info">
        <p className="on-board__paragraph">
          <span className="on-board__info_orange">Дропшиппинг</span> - это возможность e-commerce предпринимателю сосредоточить время и силы на продажах.
          Вы можете заниматься развитием отношений с покупателями в вашем интернет-магазине, повышать уровень доверия,
          уделить время настройке рекламы и продвижения.
        </p>
        <div className="on-board__paragraph">
          Мы возьмем на себя все рутинные задачи связанные с логистикой, приемом платежей и хранением остатков:
          <ul>
            <li> Упакуем заказ в соответствии со стандартами транспортных компаний и служб доставки;</li>
            <li>Подготовим сопроводительные документы;</li>
            <li>Доставим заказ покупателю;</li>
            <li>Получим оплату от него и переведем деньги на Ваш расчетный счет;</li>
          </ul>
          <br />
          <span className="on-board__info_orange">Вам остается только передать всю необходимую информацию для отправки заказа клиенту.</span>
        </div>
        <p className="on-board__paragraph">
          Отчет о выполненных заказах будет доступен в личном кабинете — так вы всегда будете знать, сколько зарабатываете.
          Все заказы доставляются от имени вашего интернет-магазина.
          <br />
          <span className="on-board__info_orange">Мы гарантируем конфиденциальность информации о клиентах.</span>
        </p>
      </div>
    </div>

  )
}

export default OnBoard