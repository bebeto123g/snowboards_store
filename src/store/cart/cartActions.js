import { CLEAR_CART, SET_CART, SUM_CART } from '../types'
import { loadCatalog } from '../catalog/catalogActions'

// cart { id: current }

export const initCart = () => {
  return async (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      await dispatch(loadCatalog())
      dispatch(setCart(cart))
      dispatch(sumCart(cart))
    }
  }
}

export const addToCart = (id, current = 1) => {
  return (dispatch, getState) => {
    if (current === 0) {
      dispatch(removeFromCart(id))
      return
    }
    const { catalog, mapCatalog } = getState().catalog
    const index = mapCatalog[id]
    const {reserve} = catalog[index]

    if (current > reserve) return

    const { cart } = getState().cart
    const newCart = { ...cart, [id]: current }
    dispatch(setCart(newCart))
  }
}

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    const { cart } = getState().cart
    // const newCart = {}
    // Object.keys(cart).map((key) => {
    //   if (key !== id) {
    //     newCart[key] = cart[key]
    //   }
    // })
    const newCart = { ...cart }
    delete newCart[id]
    dispatch(setCart(newCart))
  }
}

export const clearCart = () => {
  localStorage.removeItem('cart')
  return {
    type: CLEAR_CART,
  }
}

export const setCart = (newCart) => {
  return (dispatch) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
    dispatch({
      type: SET_CART,
      payload: newCart,
    })
    dispatch(sumCart(newCart))
  }
}

export const sumCart = (cart = {}) => {
  return (dispatch, getState) => {
    const { catalog, mapCatalog } = getState().catalog

    const sum = Object.keys(cart).reduce((total, key) => {
      // const index = catalog.findIndex((item) => item.id === key)
      const index = mapCatalog[key]
      const { price } = catalog[index]
      return total + +(price * cart[key])
    }, 0)

    dispatch({
      type: SUM_CART,
      payload: sum,
    })
  }
}
