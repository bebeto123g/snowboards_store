import { CLEAR_CART, SET_CART } from '../types'

const initState = {
  cart: null,
  sum: 0,
}

export function cartReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_CART:
      return {
        ...state,
        cart: payload.cart,
        sum: payload.sum,
      }

    case CLEAR_CART:
      return initState

    default:
      return state
  }
}
