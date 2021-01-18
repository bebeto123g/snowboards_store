import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Cart = styled.div`
  color: cadetblue;
`

const CartPage = () => {
  return (
    <Cart>
      <h1>Корзина</h1>
      <Button variant={'outline-secondary'}>Cart</Button>
    </Cart>
  )
}

export default CartPage