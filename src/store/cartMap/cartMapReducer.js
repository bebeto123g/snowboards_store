import { SET_CART_MAP, CLEAR_CART_MAP } from '../types'

const initState = {
  cartMap: []
}

export function cartMapReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_CART_MAP:
      return {
        cartMap: payload
      }

    case CLEAR_CART_MAP:
      return initState

    default:
      return state
  }
}
