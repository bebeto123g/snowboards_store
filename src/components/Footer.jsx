import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FooterSC = styled.footer`
  width: 100%;
  min-height: 44px;
  background-color: #343a40;
  padding: 8px 16px;
  color: white;
  display: flex;
  justify-content: center;
  flex-flow: column-reverse;
  font-size: 12px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: azure;
  }
  span {
    
  }
`

const Footer = () => {
  return (
    <FooterSC>
      <a href="tel:88002000600">Телефон для связи: 8 800 2000 600</a>
      <span>Ваши права не защищены, как и наши &copy;</span>
      {/*<a href="https://google.com" target="_blank" rel="noreferrer">*/}
      {/*  Перейти в GOOGLE*/}
      {/*</a>*/}
      <NavLink to={'/cart'}>В корзину</NavLink>
    </FooterSC>
  )
}

export default Footer
