import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const CartSum = () => {
  const { sum = 0 } = useSelector((state) => state.cart, shallowEqual)

  return <>{sum}</>
}

export default CartSum
