import React from 'react'

import Header from '../components/header/Header'
import UserHeaderHavbar from '../components/header/UserHeaderHavbar'
import Main from '../components/main/Main'

const AuthPage = () => {
  return (
    <>
      <Header userHeaderProps={<UserHeaderHavbar />} />
      <Main/>
    </>
  )
}

export default AuthPage