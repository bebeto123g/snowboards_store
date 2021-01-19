import { LOADER_SHOW, LOADER_HIDE } from '../types'

export const startLoading = () => {
  return {
    type: LOADER_SHOW,
  }
}

export const stopLoading = () => {
  return {
    type: LOADER_HIDE,
  }
}

