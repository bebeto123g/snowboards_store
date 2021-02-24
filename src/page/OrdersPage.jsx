import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Row, Table } from 'react-bootstrap'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import { loadOrders } from '../store/orders/ordersActions'
import LoaderPage from '../UI/Loader/LoaderPage'
import ButtonToRoute from '../UX/Routes/ButtonToRoute'
import OrdersTableCell from '../components/OrdersTableCell'
import { TrTableOrders } from '../styled/TrTableOrders'

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.orders, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!orders || (orders && !orders.length)) {
      dispatch(loadOrders())
    }
  }, [dispatch, orders])

  if (!orders) return <LoaderPage />
  if (!orders.length)
    return (
      <Page>
        <PageHeader>Заказы отсутствуют</PageHeader>
        <Row>
          <ButtonToRoute to={'/catalog'} variant={'info'} className={'mx-auto'}>
            Перейти в каталог
          </ButtonToRoute>
        </Row>
      </Page>
    )

  return (
    <Page>
      <PageHeader>Заказы</PageHeader>
      <Row>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <TrTableOrders>
              <th>Номер заказа</th>
              <th>Статус</th>
              <th>Дата</th>
              <th>Сумма</th>
            </TrTableOrders>
          </thead>
          <tbody>
            {orders.map((order) => {
              return <OrdersTableCell key={order.orderId} {...order} />
            })}
          </tbody>
        </Table>
      </Row>
    </Page>
  )
}

export default OrdersPage
