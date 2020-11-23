import { LOADER_SHOW, LOADER_HIDE } from '../actionTypes'

const startLoading = () => {
  return {
    type: LOADER_SHOW,
  }
}

const stopLoading = () => {
  return {
    type: LOADER_HIDE,
  }
}

export { startLoading, stopLoading }
