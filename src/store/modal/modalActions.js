import { MODAL_HIDE, MODAL_SHOW } from '../types'
import { clearAuthError } from '../auth/authActions'

export const showModal = (type) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_SHOW,
      payload: type,
    })
  }
}

export const hideModal = () => {
  return (dispatch) => {
    dispatch({
      type: MODAL_HIDE
    })
    dispatch(clearAuthError())
  }
}