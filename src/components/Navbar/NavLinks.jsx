import React from 'react'
import { useSelector } from 'react-redux'

import { Nav } from 'react-bootstrap'

import LinkNavPanel from '../../UX/LinkNavPanel'
import { navLinksTypes } from './navLinksTypes'

const NavLinks = () => {
  const { isLogin } = useSelector((state) => state.isLogin)

  return (
    <Nav className="mr-auto">
      {navLinksTypes.map(({ to, exact, text, isAuth }) => {
        if (!isLogin && isAuth) return

        return (
          <LinkNavPanel to={to} exact={exact} key={text + to}>
            {text}
          </LinkNavPanel>
        )
      })}
    </Nav>
  )
}

export default NavLinks
