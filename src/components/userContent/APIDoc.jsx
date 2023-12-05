import React from 'react'

import MainTitle from '../main/MainTitle'
import APIDocLink from './APIDocLink'

const APIDoc = () => {
  return (
    <div className="api-doc">
      <MainTitle classMainTitleProps='api-doc__title' titleMainTitleProps='Исчерпывающее описание' />
      <p className='api-doc__text'>Exorcizo te, immundissime spiritus, omnis incursio adversarii, omne phantasma, omnis legio, in nomine Domini nostri Jesu Christi eradicare, et effugare ab hoc plasmate Dei. Ipse tibi imperat, qui te de supernis caelorum in inferiora terrae demergi praecepit. Ipse tibi imperat, qui mari, ventis, et tempestatibus impersvit.</p>
      <span className='api-doc__subtitle'>Скачать API документацию</span>
      <APIDocLink titleAPIDocLinkProps='API ключ' keyAPIDocLinkProps='168515satanpridi' />
      <APIDocLink titleAPIDocLinkProps='API токен' keyAPIDocLinkProps='4975216pozaluista' />
    </div>
  )
}

export default APIDoc