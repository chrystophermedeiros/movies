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
    padding: 10px;
  }

  h3 {
    color: #ffffff;
    padding-top: 10px;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    img {
      width: 100px;
    }
  }
`
