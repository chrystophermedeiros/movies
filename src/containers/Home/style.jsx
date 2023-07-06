import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100vh;
  }
`

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
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
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }
  }
`

export const Info = styled.div`
  z-index: 2;
  color: #ffffff;
  padding: 20px;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 40%;
    overflow: hidden;
    font-size: 5px;

    p {
      overflow: auto;
      font-size: 16px;
      width: 100%;
      height: 40%;
      margin: 0;
    }
  }

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
  height: 100vh;
  max-width: 1500px;
  @media screen and (max-width: 800px) {
    height: 100vh;
    width: 100vw;
    img {
      width: 250px;
      margin-top: 40px;
    }
    flex-direction: column-reverse;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      margin: 10px;
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
