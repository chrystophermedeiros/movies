import { useState, useEffect } from 'react'

import { getMovieVideos } from '../../services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setshowModal }) {
  const [movie, setMovie] = useState()
  console.log(movie)

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId))
    }
    getMovies()
  }, [])

  return (
    <Background onClick={() => setshowModal(false)}>
      {movie && (
        <Container>
          <button onClick={() => setshowModal(false)}>X</button>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Plyer"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
