import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import { removeFromCart } from '../../store/cart/cartActions'

const ButtonRemoveFromCart = ({
  id,
  callback,
  children,
  variant = 'danger',
}) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(removeFromCart(id))
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

ButtonRemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
  callback: PropTypes.func,
}

export default ButtonRemoveFromCart
