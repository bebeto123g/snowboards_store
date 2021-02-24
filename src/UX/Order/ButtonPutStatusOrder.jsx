import React, { useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import { putStatusOrder } from '../../store/orders/ordersActions'

const ButtonPutStatusOrder = ({ children, callback, className }) => {
  const dispatch = useDispatch()
  const { detailOrder: order } = useSelector(
    (state) => state.orders,
    shallowEqual
  )

  const handler = useCallback(() => {
    dispatch(putStatusOrder(order.status === 'Заказ отменен' ? 'resume' : 'undo'))
    if (callback) {
      callback()
    }
  }, [dispatch, callback, order])

  return (
    <Button
      variant={order.status === 'Заказ отменен' ? 'success' : 'danger'}
      onClick={handler}
      className={className}
    >
      {children}
    </Button>
  )
}
ButtonPutStatusOrder.propTypes = {
  callback: PropTypes.func,
  className: PropTypes.string,
}

export default ButtonPutStatusOrder
