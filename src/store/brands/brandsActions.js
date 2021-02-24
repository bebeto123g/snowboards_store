import { LOAD_BRANDS } from '../types'
import { fetchBrandList } from '../../services/fetchBrandlist'
import { loadingPageError } from '../pageLoading/pageLoadingActions'
import { showAlert } from '../alert/alertActions'

export const loadBrands = () => {
  return async (dispatch) => {
    try {
      const brands = await fetchBrandList()

      dispatch({
        type: LOAD_BRANDS,
        payload: brands,
      })
    } catch (e) {
      dispatch(loadingPageError())
      dispatch(showAlert('danger', 'Ошибка загрузки брэндов!'))
    }
  }
}
