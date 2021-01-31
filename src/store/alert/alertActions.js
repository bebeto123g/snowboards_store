import { ALERT_HIDE, ALERT_SHOW } from '../types'

export const showAlert = (variant, message) => {
  return (dispatch) => {
    const tid = setTimeout(() => {
      dispatch(hideAlert())
      clearTimeout(tid)
    }, 3000)

    dispatch({
      type: ALERT_SHOW,
      payload: { variant, message, tid },
    })
  }
}

export const hideAlert = () => {
  return {
    type: ALERT_HIDE,
  }
}
