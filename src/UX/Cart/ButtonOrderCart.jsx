import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import { toOrderCart } from '../../store/cart/cartActions'

const ButtonOrderCart = ({ children, variant = 'success', callback }) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(toOrderCart())
    if (callback) {
      callback()
    }
  }, [dispatch, callback])

  return (
    <Button variant={variant} onClick={handler}>
      {children}
    </Button>
  )
}
ButtonOrderCart.propTypes = {
  variant: PropTypes.string,
  callback: PropTypes.func,
}

export default ButtonOrderCart
