import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_CHANGE_FORM,
  AUTH_ERROR,
  AUTH_START_LOADING,
  AUTH_STOP_LOADING, AUTH_CLEAR_ERROR
} from '../types'

const initState = {
  isLogin: false,
  message: '',
  loading: false,
  token: '',
  userId: null,
  error: null,
  form: {
    email: '',
    password: '',
  },
}

export function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: payload.token,
        userId: payload.userId,
        message: payload.message
      }

    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
      }

    case AUTH_CHANGE_FORM:
      return {
        ...state,
        form: payload,
      }

    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    case AUTH_START_LOADING:
      return {
        ...state,
        loading: true
      }

    case AUTH_STOP_LOADING:
      return {
        ...state,
        loading: false
      }

    case AUTH_LOGOUT:
      return {
        ...initState,
        form: { ...state.form, password: '' }
      }

    default:
      return state
  }
}
