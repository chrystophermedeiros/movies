import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Cards({ item, text }) {
  function getId(id) {
    console.log(id)

    //  navigate(`/detalhe/${id}`)
  }

  return (
    <Container>
      <img
        onClick={() => getId(item.id)}
        src={getImages(item.poster_path || item.profile_path || '')}
      />
      <h3>{text ? item.title || item.name : ''}</h3>
    </Container>
  )
}
export default Cards
