import { ALERT_HIDE, ALERT_SHOW } from '../types'

const showAlert = (variant, message) => {
  return (dispatch) => {
    dispatch({
      type: ALERT_SHOW,
      payload: { variant, message },
    })
    const tid = setTimeout(() => {
      dispatch(hideAlert())
      clearTimeout(tid)
    }, 3000)
  }
}

const hideAlert = () => {
  return {
    type: ALERT_HIDE,
  }
}

export { showAlert, hideAlert }
