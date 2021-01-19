import { MODAL_HIDE, MODAL_SHOW } from '../types'

export const showModal = (type) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_SHOW,
      payload: type,
    })
  }
}

export const hideModal = () => {
  return {
    type: MODAL_HIDE,
  }
}