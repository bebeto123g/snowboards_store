import { ALERT_SHOW, ALERT_HIDE } from '../types'

const initState = {
  isAlert: false,
  tid: null,
  variant: 'secondary',
  message: 'Непредвиденная Оказия!',
}

export function alertReducer(state = initState, { type, payload }) {
  switch (type) {
    case ALERT_SHOW:
      return {
        isAlert: true,
        variant: payload.variant,
        message: payload.message,
        tid: payload.tid
      }

    case ALERT_HIDE:
      clearTimeout(state.tid)
      return initState

    default:
      return state
  }
}
