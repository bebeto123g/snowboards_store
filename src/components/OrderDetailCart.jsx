import React, { useEffect, useState } from 'react'

import { Spinner } from 'react-bootstrap'

import { TrTableOrders } from '../styled/TrTableOrders'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { loadCatalog } from '../store/catalog/catalogActions'

const OrderDetailCart = ({ count, price, id }) => {
  const { catalog } = useSelector((state) => state.catalog, shallowEqual())
  const [bord, setBord] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!catalog) {
      dispatch(loadCatalog())
    } else {
      const { brand, name } = catalog.find((item) => item.id === id)
      setBord(`${brand} - ${name}`)
    }
  }, [dispatch, catalog, id])

  return (
    <TrTableOrders>
      <td>{bord || <Spinner animation={'border'} />}</td>
      <td>{count} шт.</td>
      <td>{price} &#8381;</td>
    </TrTableOrders>
  )
}

export default OrderDetailCart
