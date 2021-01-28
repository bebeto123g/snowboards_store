import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import LinkNavPanel from '../UI/LinkNavPanel'
import LineSearch from '../UI/LineSearch'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../store/modal/modalActions'

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

const NavbarPanel = () => {
  const dispatch = useDispatch()
  const { isLogin } = useSelector((state) => state.auth)

  const submitHandler = (value) => {
    console.log(value)
  }
  return (
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
        <Button
          className="ml-5"
          variant="warning"
          onClick={() => dispatch(showModal(isLogin ? 'logout' : 'login'))}
        >
          {isLogin ? 'Выйти' : 'Войти'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarPanel
