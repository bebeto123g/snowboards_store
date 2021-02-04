import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import { addToCart } from '../../store/cart/cartActions'

const ButtonAddToCart = ({ id, callback, children, variant = 'success' }) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(addToCart(id))
    if (callback) {
      callback()
    }
  }, [dispatch, id, callback])

  return (
    <Button variant={variant} onClick={handler}>
      {children}
    </Button>
  )
}
ButtonAddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
  callback: PropTypes.func,
}

export default ButtonAddToCart
