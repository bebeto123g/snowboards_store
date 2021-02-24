import { CLEAR_ORDERS, DETAIL_ORDER, LOAD_ORDERS } from '../types'

const initState = {
  orders: null,
  detailOrder: null,
  orderId: null
}

export function ordersReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOAD_ORDERS:
      return {
        ...state,
        orders: payload,
      }

    case DETAIL_ORDER:
      return {
        ...state,
        detailOrder: payload,
        orderId: payload.orderId
      }

    case CLEAR_ORDERS:
      return initState

    default:
      return state
  }
}
