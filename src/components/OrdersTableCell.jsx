import React from 'react'
import PropTypes from 'prop-types'

import { TrTableOrders } from '../styled/TrTableOrders'
import { useHistory } from 'react-router-dom'

const OrdersTableCell = ({ orderId, sum, orderNum, date, status }) => {
  const history = useHistory()

  const handler = () => {
    history.push(`/orders/${orderId}`)
  }

  return (
    <TrTableOrders onClick={handler}>
      <td>{orderNum}</td>
      <td>{status}</td>
      <td>{date}</td>
      <td>{sum} &#8381;</td>
    </TrTableOrders>
  )
}

OrdersTableCell.propTypes = {
  sum: PropTypes.number.isRequired,
  orderNum: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default OrdersTableCell
