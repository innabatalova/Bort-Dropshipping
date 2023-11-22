import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import useRoutes from './core/routes'
import { userAuthContext } from './context/UserAuthContext'

const LayoutBlock = () => {
  const routes = useRoutes()
  const [contextUserAuth, setContextUserAuth] = useState(false)

  return (
    <userAuthContext.Provider value={[contextUserAuth, setContextUserAuth]}>
      <BrowserRouter>
        <div className="layout">
          {routes}
        </div>
      </BrowserRouter>
    </userAuthContext.Provider>
  )
}

export default LayoutBlock