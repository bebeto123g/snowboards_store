import { ALERT_SHOW, ALERT_HIDE } from '../types'

const initState = {
  isAlert: false,
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
      }

    case ALERT_HIDE:
      return initState

    default:
      return state
  }
}
