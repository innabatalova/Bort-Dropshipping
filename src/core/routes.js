import React from 'react'
import { Route, Routes } from 'react-router-dom'

import StartPage from '../pages/StartPage'
import PrivateRoute from '../components/onBoard/PrivateRoute'
import AuthPage from '../pages/AuthPage'

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<AuthPage />} />
      </Route>
    </Routes>
  )
}

export default useRoutes