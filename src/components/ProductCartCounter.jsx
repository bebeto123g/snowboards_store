import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Counter from '../UI/Counter'
import { addToCart } from '../store/cart/cartActions'

const ProductCartCounter = ({ id }) => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const counter = +cart[id]

  return (
    <Counter
      counter={counter}
      decrement={() => dispatch(addToCart(id, counter - 1))}
      increment={() => dispatch(addToCart(id, counter + 1))}
    />
  )
}

ProductCartCounter.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ProductCartCounter
