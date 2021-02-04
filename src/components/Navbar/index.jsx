import React, { useCallback } from 'react'

import { Navbar } from 'react-bootstrap'

import LineSearch from '../../UI/LineSearch'
import NavbarButtonAuth from './NavbarButtonAuth'

import NavLogo from '../../styled/NavLogo'
import NavLinks from './NavLinks'

const NavbarPanel = () => {
  const submitHandlerSearch = useCallback((value) => {
    console.log(value)
  }, [])

  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <NavLogo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLinks />
          <LineSearch submit={submitHandlerSearch} />
          <NavbarButtonAuth />
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavbarPanel
