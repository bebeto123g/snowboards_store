import { AUTH_SUCCESS, AUTH_LOGOUT } from '../types'

const initState = {
  isLogin: false,
  token: '',
}

export function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        isLogin: true,
        token: payload
      }

    case AUTH_LOGOUT:
      return initState

    default:
      return state
  }
}
