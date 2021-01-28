import { CLEAR_CART, SET_CART, SUM_CART } from '../types'

const initState = {
  cart: null,
  sum: 0
}

export function cartReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_CART:
      return {
        ...state,
        cart: payload
      }

    case CLEAR_CART:
      return initState

    case SUM_CART:
      return {
        ...state,
        sum: payload
      }

    default:
      return state
  }
}
