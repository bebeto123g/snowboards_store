import React, { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Row, Table } from 'react-bootstrap'

import CartTableCell from '../components/Cart/CartTableCell'
import CartBottom from '../components/Cart/CartBottom.jsx'
import CartEmpty from '../components/Cart/CartEmpty'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'

const CartPage = () => {
  const { cartMap } = useSelector((state) => state.cartMap, shallowEqual)

  if (!cartMap.length) return <CartEmpty />

  return (
    <Page>
      <PageHeader>Корзина</PageHeader>
      <Row>
        <Table striped bordered hover>
          <tbody>
            {cartMap.map((id) => (
              <CartTableCell id={id} key={id} />
            ))}
          </tbody>
        </Table>
      </Row>
      <CartBottom />
    </Page>
  )
}

export default CartPage
