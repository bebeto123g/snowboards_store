import { LOAD_BRANDS } from '../types'

const initState = {
  brands: null,
}

export function brandsReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOAD_BRANDS:
      return {
        brands: payload,
      }

    default:
      return state
  }
}
