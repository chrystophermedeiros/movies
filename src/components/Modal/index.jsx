import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { Container, Background, Close } from './style'

export function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get(`/movie/${movieId}/videos`)

      setMovie(results[0])
    }

    getMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <Close />
          <iframe
            width="80%"
            height="400"
            title="`Youtube Video Player"
            src={`https://www.youtube.com/embed/${movie.key}`}
          ></iframe>
        </Container>
      )}
    </Background>
  )
}
