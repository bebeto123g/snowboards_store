import {
  PAGE_LOADER_ERROR,
  PAGE_CLEAR_ERROR,
} from '../types'

// export const startLoading = () => {
//   return {
//     type: PAGE_LOADER_SHOW,
//   }
// }

// export const stopLoading = () => {
//   return {
//     type: PAGE_LOADER_HIDE,
//   }
// }

export const loadingPageError = () => {
  return {
    type: PAGE_LOADER_ERROR,
  }
}

export const clearPageError = () => {
  return {
    type: PAGE_CLEAR_ERROR,
  }
}
