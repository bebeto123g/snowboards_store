import React, { useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Counter from '../../UI/Counter'
import { cartDecrement, cartIncrement } from '../../store/cart/cartActions'

const CounterCart = ({ id }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart, shallowEqual)

  const decrement = useCallback(() => {
    dispatch(cartDecrement(id))
  }, [dispatch, id])

  const increment = useCallback(() => {
    dispatch(cartIncrement(id))
  }, [dispatch, id])

  useEffect(() => {
    console.log('render CounterCart')
  })

  return (
    <Counter counter={cart[id]} decrement={decrement} increment={increment} />
  )
}

CounterCart.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CounterCart
