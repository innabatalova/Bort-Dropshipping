import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import useRoutes from './core/routes'
import { userAuthContext } from './context/UserAuthContext'
import { menuContext } from './context/menuContext'
import { modalFormContext } from './context/modalFormContext'

const LayoutBlock = () => {
  const routes = useRoutes()
  const [contextUserAuth, setContextUserAuth] = useState(false)
  const [contextMenu, setContextMenu] = useState('bio')
  const [contextOpenModal, setContextOpenModal] = useState('')

  return (
    <userAuthContext.Provider value={[contextUserAuth, setContextUserAuth]}>
      <menuContext.Provider value={[contextMenu, setContextMenu]}>
        <modalFormContext.Provider value={[contextOpenModal, setContextOpenModal]}>
        <BrowserRouter>
          <div className="layout">
            {routes}
          </div>
        </BrowserRouter>
        </modalFormContext.Provider>
      </menuContext.Provider>
    </userAuthContext.Provider>
  )
}

export default LayoutBlock