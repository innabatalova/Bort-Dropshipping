import React from 'react'

const BioItem = ({ idBioItemProps, titleBioItemProps, valueBioItemProps }) => {
  return (
    <div className='bio-item'>
      <label htmlFor={idBioItemProps} className='bio-item__label'>{titleBioItemProps}</label>
      <span id={idBioItemProps} className="bio-item__field">{valueBioItemProps}</span>
    </div>
  )
}

export default BioItem