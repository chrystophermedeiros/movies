import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    border-radius: 30px;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 100px;
    }
  }

  h3 {
    color: #ffffff;
    padding-top: 10px;
    text-align: center;
  }
`
