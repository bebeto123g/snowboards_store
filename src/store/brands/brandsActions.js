import { LOAD_BRANDS } from '../types'
import { fetchBrandList } from '../../services/fetchBrandlist'
import { startLoading, stopLoading } from '../loading/loadingActions'

export const loadBrands = () => {
  return async (dispatch) => {
    dispatch(startLoading())

    const brands = await fetchBrandList()

    dispatch({
      type: LOAD_BRANDS,
      payload: brands,
    })

    dispatch(stopLoading())
  }
}
