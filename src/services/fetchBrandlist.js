import Axios from 'axios'
import { BASE_URL } from './API'

export const fetchBrandList = async () => {
  const response = await Axios.get(
    `${BASE_URL}/brandlist.json`
  )
  return response.data
}