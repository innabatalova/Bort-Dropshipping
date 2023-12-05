import React, { useState } from 'react'
import Modal from '@mui/material/Modal'

import CopyLinkIcon from '../../static/img/copy-link-icon.svg'

const APIDocLink = ({ titleAPIDocLinkProps, keyAPIDocLinkProps }) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const copyKey = () => {
    navigator.clipboard.writeText(keyAPIDocLinkProps)
    setOpen(true)
  }

  return (
    <div className="api-doc__link">
      <span className="api-doc__link__title">{titleAPIDocLinkProps}</span>
      <div className="api-doc__link__wrap">
        <div className="api-doc__link__key">{keyAPIDocLinkProps}</div>
        <button className="api-doc__link__button" onClick={copyKey}>
          <img src={CopyLinkIcon} alt="Скопировать ключ" />
          copy
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}>
        <div className="api-doc__link__modal">{titleAPIDocLinkProps + ` скопирован в буфер обмена!`}</div>
      </Modal>
    </div>
  )
}

export default APIDocLink