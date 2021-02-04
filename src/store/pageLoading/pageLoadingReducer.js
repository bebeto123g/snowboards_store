import {
  PAGE_LOADER_SHOW,
  PAGE_LOADER_HIDE,
  PAGE_LOADER_ERROR,
  PAGE_CLEAR_ERROR,
} from '../types'

const initState = {
  pageLoading: false,
  pageError: false,
}

export function pageLoadingReducer(state = initState, { type }) {
  switch (type) {
    case PAGE_LOADER_SHOW:
      return {
        ...state,
        pageLoading: true,
      }

    case PAGE_LOADER_HIDE:
      return {
        ...state,
        pageLoading: false,
      }

    case PAGE_LOADER_ERROR:
      return {
        ...state,
        pageError: true,
      }

    case PAGE_CLEAR_ERROR:
      return {
        ...state,
        pageError: false,
      }

    default:
      return state
  }
}
