// rafce
import React from 'react'

const Imagem = ({src, alt, imgStyle}) => {
  return (
    <div className={`flex justify-content-center ${imgStyle}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem