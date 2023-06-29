import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './style'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Menu>
        <Li>
          <Link to={'/'}>Home</Link>
          <Link to={'/filmes'}>Filmes</Link>
          <Link to={'/series'}>Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}
