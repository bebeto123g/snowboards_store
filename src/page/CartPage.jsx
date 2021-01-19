import React from 'react'
import { Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductCaleInCart from '../components/ProductCardInCart'

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart)
  const { catalog, mapCatalog } = useSelector((state) => state.catalog)

  if (!Object.keys(cart).length) return <h1>Корзина пуста</h1>

  return (
    <>
      <Row className="d-flex justify-content-center my-2">
        <h1>Корзина</h1>
      </Row>
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
