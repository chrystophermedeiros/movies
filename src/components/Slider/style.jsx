import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 20px;

  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  margin: 0 4%;
  @media screen and (max-width: 800px) {
    display: block;
    padding: 10px;
    h3 {
      font-size: 14px;
    }
  }

  h2 {
    color: #ffffff;
    padding: 30px;
    font-size: 24px;
  }
  .swiper-wrapper {
    display: flex;
  }
`
