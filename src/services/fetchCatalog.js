import Axios from 'axios'
import { BASE_URL } from './API'

export const fetchCatalog = async () => {
  const response = await Axios.get(
    `${BASE_URL}/catalog.json`
  )
  return response.data
}