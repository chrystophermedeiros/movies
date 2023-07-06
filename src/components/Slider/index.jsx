import { Swiper, SwiperSlide } from 'swiper/react'

import { Card } from '../../components'
import { Container } from './style'

export function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={'1'}
        className="swiper"
      >
        {info &&
          info.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}
