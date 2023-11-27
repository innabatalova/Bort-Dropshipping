import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom"

import { userAuthContext } from '../../context/UserAuthContext'

const PrivateRoute = () => {
  const [contextUserAuth] = useContext(userAuthContext)
  const location = useLocation()

  return (
    contextUserAuth === true ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
  )
}

export default PrivateRoute