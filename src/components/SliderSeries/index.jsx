import React, { useState, useEffect } from 'react'

import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardsSeries from '../CardsSeries'
import { Container } from './styles'

import 'swiper/css'
import 'swiper/css/free-mode'

function SliderSeries({ info, title, isTrue }) {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 600px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(max-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return (
    <>
      <Container>
        <h2>{title}</h2>

        <Swiper
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={(matches && 2) || (!matches && 5)}
          className="swiper"
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <CardsSeries item={item} text={true} isShow={isTrue} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}
export default SliderSeries
