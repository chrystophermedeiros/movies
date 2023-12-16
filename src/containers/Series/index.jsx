import { useEffect, useState } from 'react'

import SectionSeries from '../../components/SectionSeries'
import { getTopSeries, getPopularSeries } from '../../services/getData'
import { Container } from './styles'

function Series() {
  const [topSeries, setTopSeries] = useState()
  const [series, setSeries] = useState()

  useEffect(() => {
    async function getMovies() {
      setTopSeries(await getTopSeries())
      setSeries(await getPopularSeries())
    }

    getMovies()
  }, [])

  return (
    <Container>
      {topSeries && <SectionSeries info={topSeries} />}
      {series && <SectionSeries info={series} />}
    </Container>
  )
}

export default Series
