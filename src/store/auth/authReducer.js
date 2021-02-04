import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_CHANGE_FORM,
  AUTH_ERROR,
  AUTH_CLEAR_ERROR,
} from '../types'

const initState = {
  token: '',
  message: '',
  userId: null,
  error: null,
  validate: false,
  form: {
    email: '',
    password: '',
    userName: '',
    tel: ''
  },
}

export function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: payload.token,
        userId: payload.userId,
        message: payload.message,
        form: payload.form,
      }

    case AUTH_CHANGE_FORM:
      return {
        ...state,
        form: payload,
      }

    case AUTH_ERROR:
      return {
        ...state,
        error: { ...payload.errors},
        form: payload.form,
        validate: true,
      }

    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: null,
        validate: false
      }

    case AUTH_LOGOUT:
      return {
        ...initState,
        form: { ...state.form, password: '' },
      }

    default:
      return state
  }
}
