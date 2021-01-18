import { ALERT_HIDE, ALERT_SHOW } from '../types'

const initState = {
  catalog: null,

}

export function catalogReducer(state = initState, { type, payload }) {
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