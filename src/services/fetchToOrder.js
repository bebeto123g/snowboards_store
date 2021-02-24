import Axios from 'axios'
import { ORDER_URL } from './API'

export const fetchToOrder = async (data, token) => {
  return await Axios.post(
    `${ORDER_URL}/add`,
    { ...data },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
}

export const fetchAllOrder = async (token) => {
  return await Axios.get(`${ORDER_URL}/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const fetchDetailOrder = async (token, id) => {
  return await Axios.get(`${ORDER_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const fetchStatusOrderUndo = async (token, id, type) => {
  return await Axios.put(
    `${ORDER_URL}/${id}`,
    { type },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
}
