import React from 'react'

import { AppFooter } from '../../styled/AppFooter'
import FooterCartLink from './FooterCartLink'

const Footer = () => {
  return (
    <AppFooter>
      <a href="tel:88002000600">Телефон для связи: 8 800 2000 600</a>
      <span>Ваши права не защищены, как и наши &copy;</span>
      <FooterCartLink />
    </AppFooter>
  )
}

export default Footer
