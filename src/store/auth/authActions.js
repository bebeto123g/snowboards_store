import {
  AUTH_LOGOUT,
  AUTH_CHANGE_FORM,
  AUTH_START_LOADING,
  AUTH_STOP_LOADING,
  AUTH_ERROR,
  AUTH_CLEAR_ERROR,
  AUTH_SUCCESS,
} from '../types'
import { hideModal } from '../modal/modalActions'
import { fetchAuthForm } from '../../services/fetchAuthForm'

export const startAuth = () => {
  return {
    type: AUTH_START_LOADING,
  }
}

export const stopAuth = () => {
  return {
    type: AUTH_STOP_LOADING,
  }
}

export const register = () => {
  return (dispatch) => {
    dispatch(sendAuthForm('register'))
  }
}

export const login = () => {
  return (dispatch) => {
    dispatch(sendAuthForm('login'))
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    dispatch(hideModal())
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}

export const changeAuthForm = (form) => {
  return {
    type: AUTH_CHANGE_FORM,
    payload: form,
  }
}

export const sendAuthForm = (type) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startAuth())

      const { form } = getState().auth

      const response = await fetchAuthForm(type, form)

      const { token, userId, message } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      dispatch({
        type: AUTH_SUCCESS,
        payload: { token, userId, message },
      })

      const tid = setTimeout(() => {
        dispatch(hideModal())
        clearTimeout(tid)
      }, 1000)

      dispatch(stopAuth())
    } catch (e) {
      dispatch(authError(e))
      dispatch(stopAuth())
    }
  }
}

export const authError = (e) => {
  if (!e.response?.data?.message) {
    return {
      type: AUTH_ERROR,
      payload: { message: e.message },
    }
  }

  const { errors, message } = e.response.data
  let email = null,
    password = null

  if (errors) {
    errors.forEach(({ param, msg }) => {
      param === 'email' ? (email = msg) : (password = msg)
    })
  }

  return {
    type: AUTH_ERROR,
    payload: {
      message,
      email,
      password,
    },
  }
}

export const clearAuthError = () => {
  return {
    type: AUTH_CLEAR_ERROR,
  }
}

export const initAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (token && userId) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: { token, userId },
      })
    }
  }
}
