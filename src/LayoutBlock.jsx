import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import useRoutes from './core/routes'
import { userAuthContext } from './context/UserAuthContext'
import { menuContext } from './context/menuContext'

const LayoutBlock = () => {
  const routes = useRoutes()
  const [contextUserAuth, setContextUserAuth] = useState(false)
  const [contextMenu, setContextMenu] = useState('new-order')

  return (
    <userAuthContext.Provider value={[contextUserAuth, setContextUserAuth]}>
      <menuContext.Provider value={[contextMenu, setContextMenu]}>
        <BrowserRouter>
          <div className="layout">
            {routes}
          </div>
        </BrowserRouter>
      </menuContext.Provider>
    </userAuthContext.Provider>
  )
}

export default LayoutBlock