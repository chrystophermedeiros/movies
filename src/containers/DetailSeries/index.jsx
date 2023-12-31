import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import { ContainerSimilar } from '../../components/Credits/styles'
import SliderSeries from '../../components/SliderSeries'
import SpanGenres from '../../components/SpanGenre'
import {
  getSerieById,
  getSerieVideos,
  getSeriesCredits,
  getSeriesSimilar
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, Cover, Info, OverView } from './styles'

function DetailSeries() {
  const { id } = useParams()

  const [serie, setSerie] = useState()
  const [serieVideos, setserieVideos] = useState()
  const [serieCredits, setserieCredits] = useState()
  const [serieSimilar, setserieSimilar] = useState()

  // console.log(similar)

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieById(id),
        getSerieVideos(id),
        getSeriesCredits(id),
        getSeriesSimilar(id)
      ])
        .then(([serie, serieVideos, serieCredits, seriesSimilar]) => {
          setSerie(serie)
          setserieVideos(serieVideos)
          setserieCredits(serieCredits)
          setserieSimilar(seriesSimilar)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <>
      {serie && (
        <>
          <Background image={getImages(serie.backdrop_path)} />

          <Container>
            <Cover>
              <img src={getImages(serie.poster_path)} />
            </Cover>
            <Info>
              <h2>{serie.title}</h2>
              <SpanGenres genres={serie.genres} />
              <OverView>{serie.overview}</OverView>
              <div>
                <Credits credits={serieCredits} />
              </div>
            </Info>
          </Container>

          <ContainerSimilar>
            {serieVideos &&
              serieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Plyer"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerSimilar>
          {serieSimilar && (
            <SliderSeries
              info={serieSimilar}
              title={'Similar Series'}
              isTrue={true}
            />
          )}
        </>
      )}
    </>
  )
}
export default DetailSeries
