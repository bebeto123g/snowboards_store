import { SET_CATALOG, MAP_CATALOG } from '../types'

const initState = {
  catalog: null,
  mapCatalog: null
}

export function catalogReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_CATALOG:
      return {
        ...state,
        catalog: payload,
      }

    case MAP_CATALOG:
      return {
        ...state,
        mapCatalog: payload
      }

    default:
      return state
  }
}