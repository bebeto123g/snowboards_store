import { AUTH_SUCCESS, AUTH_LOGOUT } from '../types'

export const register = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SUCCESS,
      payload: 'token',
    })
  }
}

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SUCCESS,
      payload: 'token',
    })
  }
}

export const logout = () => {
  return {
    type: AUTH_LOGOUT,
  }
}
