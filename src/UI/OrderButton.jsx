import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toOrderCart } from '../store/cart/cartActions'

const OrderButton = () => {
  const dispatch = useDispatch()

  return (
    <Button
      variant="outline-success"
      onClick={() => dispatch(toOrderCart())}
    >
      Отправить заказ
    </Button>
  )
}

export default OrderButton