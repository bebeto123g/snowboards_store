import { DETAIL_ORDER, LOAD_ORDERS } from '../types'
import { fetchAllOrder, fetchDetailOrder, fetchStatusOrderUndo } from '../../services/fetchToOrder'
import { showAlert } from '../alert/alertActions'
import { loadingPageError } from '../pageLoading/pageLoadingActions'

export const loadOrders = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchAllOrder(token)

      const orders = response.data.map(({ cart, _id, sum, status, date }) => {
        return {
          orderId: _id,
          sum,
          cart,
          status,
          date: new Date(date).toLocaleString(),
          orderNum: _id.slice(-8, _id.length).toUpperCase(),
        }
      })

      dispatch({
        type: LOAD_ORDERS,
        payload: orders,
      })
    } catch {
      dispatch(loadingPageError())
      dispatch(showAlert('danger', 'Ошибка загрузки заказов!'))
    }
  }
}

export const loadDetailOrder = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')

      const response = await fetchDetailOrder(token, id)

      const { cart, sum, status, date } = response.data

      const order = {
        orderId: id,
        sum,
        cart,
        status,
        date: new Date(date).toLocaleString(),
        orderNum: id.slice(-8, id.length).toUpperCase(),
      }

      dispatch({
        type: DETAIL_ORDER,
        payload: order,
      })
    } catch {
      dispatch(loadingPageError())
      dispatch(showAlert('danger', 'Ошибка загрузки заказов!'))
    }
  }
}

export const putStatusOrder = (type) => {
  return async (dispatch, getState) => {
    try {
      const { detailOrder, orderId } = getState().orders

      const token = localStorage.getItem('token')
      const response = await fetchStatusOrderUndo(token, orderId, type)

      const { status } = response.data

      const order = {
        ...detailOrder,
        status
      }

      dispatch({
        type: DETAIL_ORDER,
        payload: order,
      })

      dispatch(loadOrders())

      dispatch(showAlert('warning', `Статус заказа '${status}'`))

    } catch {
      dispatch(loadingPageError())
      dispatch(showAlert('danger', 'Ошибка изменения заказа!'))
    }
  }
}