import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function CardsMovies({ item, text, isShow }) {
  const navigate = useNavigate()

  function getId(id) {
    if (item) {
      navigate(`/detalhefilmes/${id}`)
    }

    if (isShow) {
      navigate(`/detalhefilmes/${id}`)
      location.reload()
    }
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
export default CardsMovies
