import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './style'

export function Header() {
  const [changeBackground, setChangebackgroud] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangebackgroud(true)
    } else {
      setChangebackgroud(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to={'/'}>Home</Link>
        </Li>

        <Li isActive={pathname.includes('filmes')}>
          <Link to={'/filmes'}>Filmes</Link>
        </Li>

        <Li isActive={pathname.includes('series')}>
          <Link to={'/series'}>Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}
