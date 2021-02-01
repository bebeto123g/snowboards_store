import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import LinkNavPanel from '../UI/LinkNavPanel'
import LineSearch from '../UI/LineSearch'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import AuthButton from '../UI/AuthButton'

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

const NavbarPanel = () => {


  const submitHandler = (value) => {
    console.log(value)
  }

  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <NavLink to={'/'}>
          <Logo src={logo} />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkNavPanel to={'/'} exact={true}>
              Главная
            </LinkNavPanel>
            <LinkNavPanel to={'/catalog'}>Каталог</LinkNavPanel>
            <LinkNavPanel to={'/brands'}>Брэнды</LinkNavPanel>
          </Nav>
          <LineSearch submit={submitHandler} />
          <AuthButton />
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavbarPanel
