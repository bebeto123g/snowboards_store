import {
  AUTH_CLEAR_ERROR,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_SUCCESS, CLEAR_ORDERS,
  LOGIN,
  LOGOUT
} from '../types'
import { hideModal } from '../modal/modalActions'
import { fetchAuthForm } from '../../services/fetchAuthForm'
import { useValidateForm } from '../../hooks/useValidateForm'
import { showAlert } from '../alert/alertActions'

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

      const { token, userId, message, profile } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      localStorage.setItem('expiresIn', String(Date.now() + 3600000))
      localStorage.setItem('profile', JSON.stringify(profile))

      dispatch({ type: LOGIN })

      dispatch(showAlert('success', message))

      dispatch({
        type: AUTH_SUCCESS,
        payload: { profile, token, userId, message, form: { ...form, password: '' } },
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

// export const changeAuthForm = (form) => {
//   return {
//     type: AUTH_CHANGE_FORM,
//     payload: form,
//   }
// }

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('profile')
    dispatch(hideModal())
    dispatch({ type: LOGOUT })
    dispatch({ type: CLEAR_ORDERS })
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
  return dispatch => {
    if (!e.response?.data?.message) {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          errors: { message: e.message },
          form: { ...form, password: '' },
        },
      })
      dispatch(showAlert('danger', e.message))
      return
    }

    const { errors, message } = e.response.data
    let email = null,
      password = null

    if (errors) {
      errors.forEach(({ param, msg }) => {
        param === 'email' ? (email = msg) : (password = msg)
      })
    }

    dispatch({
      type: AUTH_ERROR,
      payload: {
        errors: {
          message,
          email,
          password,
        },
        form: { ...form, password: '' },
      },
    })
    dispatch(showAlert('danger', message))
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
      localStorage.removeItem('profile')
      return
    }

    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const profile = JSON.parse(localStorage.getItem('profile'))

    dispatch(autoLogout(expiresIn - currentTime))

    if (token && userId) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: { token, userId, profile, message: 'Вы вошли в систему!' },
      })
      dispatch({ type: LOGIN })
    }
  }
}
