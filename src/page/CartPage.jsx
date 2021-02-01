import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button, Row, Table } from 'react-bootstrap'
import ProductCaleInCart from '../components/ProductCaleInCart'
import PageHeader from '../UI/PageHeader'
import OrderButton from '../UI/OrderButton'
import AuthButton from '../UI/AuthButton'
import Loader from '../UI/Loader'

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart)
  const { catalog, mapCatalog } = useSelector((state) => state.catalog)
  const { isLogin } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.loading)
  let history = useHistory()

  if (loading) return <Loader />

  if (!cart || !Object.keys(cart).length)
    return (
      <>
        <PageHeader>Корзина пуста</PageHeader>
        <Row>
          <Button variant={'info'} className="mx-auto" onClick={() => history.push('/catalog')}>
            Перейти в каталог
          </Button>
        </Row>
      </>
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
      <Row>
        <div className="ml-auto">
          {isLogin ? <OrderButton /> : <AuthButton />}
        </div>
      </Row>
    </>
  )
}

export default CartPage
