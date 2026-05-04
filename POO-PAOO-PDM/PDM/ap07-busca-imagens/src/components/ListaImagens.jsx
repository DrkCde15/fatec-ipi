import Imagem from './Imagem'
const ListaImagens = ({photos}) => {
  return (
    <div>
        {photos.map((photo, key) => (
            <div key={key}>
                <Imagem
                    src={photo.src.small}
                    alt={photo.alt}
                />
            </div>
        ))}
    </div>
  )
}
 
export default ListaImagens
 