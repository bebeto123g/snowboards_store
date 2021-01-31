import Axios from 'axios'
import { AUTH_URL } from './API'

export const fetchAuthForm = async (type, form) => {
  return await Axios.post(`${AUTH_URL}/${type}`, { ...form })
}
