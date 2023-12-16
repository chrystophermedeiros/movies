import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setchangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 120) {
      setchangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 120) {
      setchangeBackground(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-devmovies" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Movies</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
