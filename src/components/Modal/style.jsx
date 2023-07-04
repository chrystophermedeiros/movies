import { FcCancel } from 'react-icons/fc'

import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  max-width: 1200px;

  iframe {
    border: none;
    width: 100%;
  }
`

export const Close = styled(FcCancel)`
  margin-left: 98%;
`
