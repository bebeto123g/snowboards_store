import { MODAL_HIDE, MODAL_SHOW } from '../types'

const initState = {
  show: false,
  type: '',
}

export function modalReducer(state = initState, { type, payload }) {
  switch (type) {
    case MODAL_SHOW:
      return {
        show: true,
        type: payload,
      }

    case MODAL_HIDE:
      return initState

    default:
      return state
  }
}
