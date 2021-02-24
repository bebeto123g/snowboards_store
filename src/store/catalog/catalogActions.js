import { SET_CATALOG, MAP_CATALOG } from '../types'
import { loadingPageError } from '../pageLoading/pageLoadingActions'
import { fetchCatalog } from '../../services/fetchCatalog'

export const loadCatalog = () => {
  return async (dispatch) => {
    try {
      const catalog = await fetchCatalog()

      const cartMap = JSON.parse(localStorage.getItem('cartMap'))

      catalog.forEach((item) => {
        cartMap
          ? (item.inCart = cartMap.includes(item.id))
          : (item.inCart = false)
      })

      dispatch({
        type: SET_CATALOG,
        payload: catalog,
      })

      dispatch(mapCatalog(catalog))
    } catch {
      dispatch(loadingPageError())
    }
  }
}

export const mapCatalog = (catalog) => {
  const mapCatalog = {}
  catalog.forEach(({ id }, index) => {
    mapCatalog[id] = index
  })

  return {
    type: MAP_CATALOG,
    payload: mapCatalog,
  }
}

export const updateCatalog = () => {
  return (dispatch, getState) => {
    const { catalog } = getState().catalog
    const { cartMap } = getState().cartMap

    if (!cartMap || !catalog) return

    const newCatalog = [...catalog]

    newCatalog.forEach((item) => {
      item.inCart = cartMap.includes(item.id)
    })

    dispatch({
      type: SET_CATALOG,
      payload: newCatalog,
    })
  }
}
