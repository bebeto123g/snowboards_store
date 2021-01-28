import React from 'react'
import { Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductCaleInCart from '../components/ProductCaleInCart'
import PageHeader from '../UI/PageHeader'

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart)
  const { catalog, mapCatalog } = useSelector((state) => state.catalog)

  if (!cart || !Object.keys(cart).length)
    return (
      <PageHeader>Корзина пуста</PageHeader>
    )

  return (
    <>
      <PageHeader>Корзина</PageHeader>
      <Row>
        <Table striped bordered hover>
          <tbody>
            {Object.keys(cart).map((key) => {
              const index = mapCatalog[key]
              const product = catalog[index]

              return <ProductCaleInCart {...product} key={product.id} />
            })}
          </tbody>
        </Table>
      </Row>
    </>
  )
}

export default CartPage
