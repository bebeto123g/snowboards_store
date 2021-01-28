import { LOAD_CATALOG, MAP_CATALOG } from '../types'
import { startLoading, stopLoading } from '../loading/loadingActions'
import { fetchCatalog } from '../../services/fetchCatalog'

export const loadCatalog = () => {
  return async (dispatch) => {
    dispatch(startLoading())
    const catalog = await fetchCatalog()
    dispatch({
      type: LOAD_CATALOG,
      payload: catalog,
    })
    dispatch(mapCatalog(catalog))
    dispatch(stopLoading())
  }
}

const mapCatalog = (catalog) => {
  const mapCatalog = {}
  catalog.forEach(({ id }, index) => {
    mapCatalog[id] = index
  })

  return {
    type: MAP_CATALOG,
    payload: mapCatalog,
  }
}
