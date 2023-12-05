import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import useRoutes from './core/routes'
import { userAuthContext } from './context/UserAuthContext'
import { menuContext } from './context/menuContext'
import { modalFormContext } from './context/modalFormContext'
import { infoModalContext } from './context/infoModalContext'

const LayoutBlock = () => {
  const routes = useRoutes()
  const [contextUserAuth, setContextUserAuth] = useState(false)
  const [contextMenu, setContextMenu] = useState('API-doc')
  const [contextOpenModal, setContextOpenModal] = useState('')
  const [contextOpenInfoModal, setContextOpenInfoModal] = useState('')

  return (
    <userAuthContext.Provider value={[contextUserAuth, setContextUserAuth]}>
      <menuContext.Provider value={[contextMenu, setContextMenu]}>
        <modalFormContext.Provider value={[contextOpenModal, setContextOpenModal]}>
          <infoModalContext.Provider value={[contextOpenInfoModal, setContextOpenInfoModal]}>
            <BrowserRouter>
              <div className="layout">
                {routes}
              </div>
            </BrowserRouter>
          </infoModalContext.Provider>
        </modalFormContext.Provider>
      </menuContext.Provider>
    </userAuthContext.Provider>
  )
}

export default LayoutBlock