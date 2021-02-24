import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Row, Table } from 'react-bootstrap'

import Page from '../hoc/Page'
import PageHeader from '../UI/PageHeader'
import LoaderPage from '../UI/Loader/LoaderPage'
import { TrTableDetail, TrTableOrders } from '../styled/TrTableOrders'
import OrderDetailCart from '../components/OrderDetailCart'
import ButtonShowModal from '../UX/Modal/ButtonShowModal'
import { loadDetailOrder } from '../store/orders/ordersActions'

const OrderDetailsPage = () => {
  const { id } = useParams()
  const { detailOrder: order, orderId } = useSelector(
    (state) => state.orders,
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (id !== orderId) {
      dispatch(loadDetailOrder(id))
    }
  }, [id, orderId, dispatch])

  if (!order || id !== orderId) return <LoaderPage />

  return (
    <Page>
      <PageHeader>Детали заказа № {order.orderNum}</PageHeader>
      <Row>
        <Table bordered hover striped>
          <tbody>
            <TrTableDetail>
              <td>Статус заказа</td>
              <td>{order.status}</td>
            </TrTableDetail>
            <TrTableDetail>
              <td>Дата заказа</td>
              <td>{order.date}</td>
            </TrTableDetail>
            <TrTableDetail>
              <td>Сумма заказа</td>
              <td>{order.sum} &#8381;</td>
            </TrTableDetail>
          </tbody>
        </Table>
      </Row>
      <Row className="justify-content-center">
        <h3>Корзина</h3>
      </Row>
      <Row>
        <Table bordered striped>
          <thead>
            <TrTableOrders>
              <th>Товар</th>
              <th>Количество</th>
              <th>Цена / 1ед</th>
            </TrTableOrders>
          </thead>
          <tbody>
            {order.cart.map((item) => {
              return <OrderDetailCart key={item.id} {...item} />
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <ButtonShowModal
          type={'status_order'}
          variant={order.status === 'Заказ отменен' ? 'success' : 'danger'}
          className={'ml-auto'}
        >
          {
            order.status === 'Заказ отменен' ? 'Возобновить заказ' : 'Отменить заказ'
          }
        </ButtonShowModal>
      </Row>
    </Page>
  )
}

export default OrderDetailsPage
