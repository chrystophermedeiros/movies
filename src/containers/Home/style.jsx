import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Info = styled.div`
  z-index: 2;
  color: #ffffff;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: xx-large;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 16px;
    font-weight: 500;

    margin-top: 50px;
    margin-bottom: 20px;
  }
`

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 300px;
    border-radius: 30px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;
`

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
`
