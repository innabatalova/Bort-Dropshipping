import React, { useState } from 'react'

import TabTitle from './TabTitle'
import Registration from './Registration'
import Auth from './Auth'

const StartForm = () => {
  const [stateVisibleTabs, setStateVisibleTabs] = useState('auth')

  return (
    <div className="start-form">
      <div className={`start-form__tabs start-form__tabs_` + stateVisibleTabs}>
        <TabTitle classTabTitleProps={`registration__title tab-title_` + (stateVisibleTabs === 'registration' ? 'visible' : '') } titleTabTitleProps='Регистрация' clickTabTitleProps={()=>setStateVisibleTabs('registration')}/>
        <TabTitle classTabTitleProps={`auth__title tab-title_` + (stateVisibleTabs === 'auth' ? 'visible' : '')} titleTabTitleProps='Вход' clickTabTitleProps={()=>setStateVisibleTabs('auth')}/>
      </div>
      {
        stateVisibleTabs === 'auth' ? <Auth /> : stateVisibleTabs === 'registration' ? <Registration /> : null
      }
    </div>
  )
}

export default StartForm