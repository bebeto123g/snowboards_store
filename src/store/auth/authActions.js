import {
  AUTH_CHANGE_FORM,
  AUTH_CLEAR_ERROR,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  LOGIN,
  LOGOUT,
} from '../types'
import { hideModal } from '../modal/modalActions'
import { fetchAuthForm } from '../../services/fetchAuthForm'
import { useValidateForm } from '../../hooks/useValidateForm'

export const login = (form) => {
  return (dispatch) => {
    const { loginValidate, errors } = useValidateForm(form)

    loginValidate()
      ? dispatch(sendAuthForm('login', form))
      : dispatch(authValidateError(errors, form))
  }
}

export const register = (form) => {
  return (dispatch) => {
    const { registerValidate, errors } = useValidateForm(form)

    registerValidate()
      ? dispatch(sendAuthForm('register', form))
      : dispatch(authValidateError(errors, form))
  }
}

export const sendAuthForm = (type, form) => {
  return async (dispatch) => {
    try {
      const response = await fetchAuthForm(type, form)

      dispatch(autoLogout(3600000))

      const { token, userId, message } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      localStorage.setItem('expiresIn', String(Date.now() + 3600000))

      dispatch({ type: LOGIN })

      dispatch({
        type: AUTH_SUCCESS,
        payload: { token, userId, message, form: { ...form, password: '' } },
      })

      const tid = setTimeout(() => {
        dispatch(hideModal())
        clearTimeout(tid)
      }, 1000)
    } catch (e) {
      dispatch(authServerError(e, form))
    }
  }
}

export const changeAuthForm = (form) => {
  return {
    type: AUTH_CHANGE_FORM,
    payload: form,
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresIn')
    dispatch(hideModal())
    dispatch({ type: LOGOUT })
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}

export const autoLogout = (time) => {
  return (dispatch) => {
    const tid = setTimeout(() => {
      dispatch(logout())
      clearTimeout(tid)
    }, time)
  }
}

export const authServerError = (e, form) => {
  if (!e.response?.data?.message) {
    return {
      type: AUTH_ERROR,
      payload: {
        errors: { message: e.message },
        form: { ...form, password: '' },
      },
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
      errors: {
        message,
        email,
        password
      },
      form: { ...form, password: '' },
    },
  }
}

export const authValidateError = (errors, form) => {
  return {
    type: AUTH_ERROR,
    payload: { errors, form: { ...form, password: '' } },
  }
}

export const clearAuthError = () => {
  return {
    type: AUTH_CLEAR_ERROR,
  }
}

export const initAuth = () => {
  return (dispatch) => {
    const currentTime = Date.now()

    const expiresIn = +localStorage.getItem('expiresIn')
    // конда кончится токен

    if (currentTime > expiresIn) {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expiresIn')
      return
    }

    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    dispatch(autoLogout(expiresIn - currentTime))

    if (token && userId) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: { token, userId },
      })
      dispatch({ type: LOGIN })
    }
  }
}
