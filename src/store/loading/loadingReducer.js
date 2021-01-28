import { LOADER_SHOW, LOADER_HIDE } from '../types'

const initState = {
  loading: false,
}

export function loadingReducer(state = initState, { type }) {
  switch (type) {
    case LOADER_SHOW:
      return {
        loading: true,
      }

    case LOADER_HIDE:
      return {
        loading: false,
      }

    default:
      return state
  }
}
