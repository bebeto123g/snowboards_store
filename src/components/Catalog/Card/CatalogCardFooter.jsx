import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Card } from 'react-bootstrap'
import ButtonRemoveFromCart from '../../../UX/Cart/ButtonRemoveFromCart'
import ButtonAddToCart from '../../../UX/Cart/ButtonAddToCart'

const CatalogCardFooter = ({ id, reserve, inCart }) => {
  const [itemInCart, setInCart] = useState(inCart)

  return (
    <Card.Footer>
      {!reserve ? (
        <p style={{ margin: '7px' }}>Нет на складе :(</p>
      ) : itemInCart ? (
        <ButtonRemoveFromCart id={id} callback={() => setInCart(false)}>
          Удалить из корзины
        </ButtonRemoveFromCart>
      ) : (
        <ButtonAddToCart id={id} callback={() => setInCart(true)}>
          Добавить в корзину
        </ButtonAddToCart>
      )}
    </Card.Footer>
  )
}

CatalogCardFooter.propTypes = {
  id: PropTypes.string.isRequired,
  reserve: PropTypes.number.isRequired,
}

export default CatalogCardFooter
