import { SET_CART_MAP, CLEAR_CART_MAP } from '../types'

// общая функция записи в localStorage и reduce
export const setMapCart = (map) => {
  localStorage.setItem('cartMap', JSON.stringify(map))
  return {
    type: SET_CART_MAP,
    payload: map,
  }
}

// получает id и просто добавляет в состояние
export const addToMapCart = (id) => {
  return (dispatch, getState) => {
    const { cartMap } = getState().cartMap
    const map = [...cartMap, id]

    dispatch(setMapCart(map))
  }
}

// отправляет id и возвращает новую карту
export const removeFromMapCart = (id) => {
  return (dispatch, getState) => {
    const { cartMap } = getState().cartMap
    const map = cartMap.filter((mid) => mid !== id)

    dispatch(setMapCart(map))
  }
}

// чистим карту корзины
export const clearMapCart = () => {
  localStorage.removeItem('cartMap')
  return {
    type: CLEAR_CART_MAP,
  }
}

// инициализация карты, принимает сущестующую корзину
export const initMapCart = (cart) => {
  return (dispatch) => {
    const map = Object.keys(cart)
    dispatch(setMapCart(map))
  }
}
