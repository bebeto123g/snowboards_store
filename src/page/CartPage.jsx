import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Row, Table } from 'react-bootstrap'

import CartTableCell from '../components/Cart/CartTableCell'
import CartBottom from '../components/Cart/CartBottom.jsx'
import CartEmpty from '../components/Cart/CartEmpty'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import { loadCatalog, updateCatalog } from '../store/catalog/catalogActions'
import LoaderPage from '../UI/Loader/LoaderPage'

const CartPage = () => {
  const { cartMap } = useSelector((state) => state.cartMap, shallowEqual)
  const { mapCatalog } = useSelector((state) => state.catalog, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!mapCatalog && cartMap.length) {
      dispatch(loadCatalog())
    }
  }, [dispatch, mapCatalog, cartMap])

  useEffect(() => {
    return () => dispatch(updateCatalog())
  }, [dispatch])

  if (!cartMap.length) return <CartEmpty />
  if (!mapCatalog) return <LoaderPage />

  return (
    <Page>
      <PageHeader>Корзина</PageHeader>
      <Row>
        <Table striped bordered hover>
          <tbody>
            {mapCatalog &&
              cartMap.map((id) => <CartTableCell id={id} key={id} />)}
          </tbody>
        </Table>
      </Row>
      <CartBottom />
    </Page>
  )
}

export default CartPage
