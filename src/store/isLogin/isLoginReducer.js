import { LOGIN, LOGOUT } from '../types'

const initState = {
  isLogin: false,
}

export function isLoginReducer(state = initState, { type }) {
  switch (type) {
    case LOGIN:
      return {
        isLogin: true,
      }

    case LOGOUT:
      return {
        isLogin: false,
      }

    default:
      return state
  }
}
