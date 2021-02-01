import Axios from 'axios'
import { ORDER_URL } from './API'

export const fetchToOrder = async (data, token) => {
  return await Axios.post(
    `${ORDER_URL}/add`,
    {...data},
    {
    headers: { Authorization: `Bearer ${token}` },
  })
}
