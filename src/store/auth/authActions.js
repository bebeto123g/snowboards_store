import { AUTH_SUCCESS, AUTH_LOGOUT } from '../types'
import { hideModal } from '../modal/modalActions'

export const register = (form) => {
  return (dispatch) => {
    console.log(form);

    dispatch(hideModal())
    dispatch({
      type: AUTH_SUCCESS,
      payload: 'token',
    })
  }
}

export const login = (form) => {
  return (dispatch) => {
    console.log(form);
    dispatch(hideModal())
    dispatch({
      type: AUTH_SUCCESS,
      payload: 'token',
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(hideModal())
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}
