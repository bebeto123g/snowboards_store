import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transition: .2s;

  &:hover {
    transform: scale(1.2)
  }
`

const NavLogo = () => {
  return (
    <NavLink to={'/'}>
      <Img src={logo} />
    </NavLink>
  )
}

export default NavLogo