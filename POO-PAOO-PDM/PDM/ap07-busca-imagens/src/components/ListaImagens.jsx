//devolver uma lista de JSX do tipo Imagem, usando map para isso
//suponha que ele recebe o photos do App como props
import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({photos}) => {
  return (
    <div>
      {
        photos.map((photo, key) => (
          <Imagem 
            src={photo.src.small}
            alt={photo.alt}
            key={key}
          />
        ))
      }
    </div>
  )
}

export default ListaImagens