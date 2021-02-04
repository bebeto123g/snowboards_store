import React from 'react'
import { useSelector } from 'react-redux'

import { Row } from 'react-bootstrap'

import CartSum from './CartSum'
import ButtonOrderCart from '../../UX/Cart/ButtonOrderCart'

const CartBottom = () => {
  const { isLogin } = useSelector((state) => state.isLogin)

  if (!isLogin)
    return (
      <Row className="justify-content-end">
        Откроем модалку
      </Row>
    )

  return (
    <Row className="justify-content-between">
      <span className="ml-3">
        {' '}
        <CartSum /> &#8381;
      </span>
      <ButtonOrderCart>Отправить заказ</ButtonOrderCart>
    </Row>
  )
}

export default CartBottom
