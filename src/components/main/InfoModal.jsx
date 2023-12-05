import React, { useContext } from 'react'

import { infoModalContext } from '../../context/infoModalContext'

const InfoModal = ({ titleInfoModalProps, openInfoModalProps }) => {
  const [, setContextOpenInfoModal] = useContext(infoModalContext)

  return (
    <div className={`info-overlay ` + openInfoModalProps}>
      <div className="info-modal">
        <h3 className="info-modal__title">{titleInfoModalProps}</h3>
        <button className='main-button info-modal__button' onClick={() => setContextOpenInfoModal('')}>Ok</button>
      </div>
    </div>

  )
}

export default InfoModal