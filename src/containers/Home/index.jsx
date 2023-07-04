import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Modal, Slider } from '../../components'
import { api } from '../../services/api'
import { getImages } from '../../utils/getImages'
import {
  MainContainer,
  Background,
  Container,
  Info,
  ContainerButton,
  Poster
} from './style'

export function Home() {
  const [showModal, setShowModal] = useState()
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popularPeople, setPopularPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovie(results)
    }

    async function getTopSeriess() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setTopSeries(results)
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setPopularSeries(results)
    }

    async function getPopularPeople() {
      const {
        data: { results }
      } = await api.get('/person/popular')

      setPopularPeople(results)
    }

    getMovies()
    getTopMovies()
    getTopSeriess()
    getPopularSeries()
    getPopularPeople()
  }, [])

  return (
    <MainContainer>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal setShowModal={setShowModal} movieId={movie.id} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                  red={true}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)} red={false}>
                  Assistir Triler
                </Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {popularPeople && (
        <Slider info={popularPeople} title={'Artistas Populares'} />
      )}
    </MainContainer>
  )
}
