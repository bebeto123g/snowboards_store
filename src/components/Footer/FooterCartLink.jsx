import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const FooterCartLink = () => {
  const { sum } = useSelector((state) => state.cart)

  return (
    <span>
      <NavLink to={'/cart'} style={{ marginRight: '5px' }}>
        Коризна:{' '}
      </NavLink>
      {sum} &#8381;
    </span>
  )
}

export default FooterCartLink
