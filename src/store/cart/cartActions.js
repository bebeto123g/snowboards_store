import { CLEAR_CART, SET_CART } from '../types'
import {
  addToMapCart,
  removeFromMapCart,
  clearMapCart,
  initMapCart,
} from '../cartMap/cartMapAction'
import { loadCatalog, updateCatalog } from '../catalog/catalogActions'
import { fetchToOrder } from '../../services/fetchToOrder'
import { showAlert } from '../alert/alertActions'
import { loadOrders } from '../orders/ordersActions'

// общая функция записи состояния корзины и суммы
export const setCart = (cart) => {
  return (dispatch, getState) => {
    const { catalog, mapCatalog } = getState().catalog

    localStorage.setItem('cart', JSON.stringify(cart))

    const sum = reduceSumCart({ cart, catalog, mapCatalog })

    dispatch({
      type: SET_CART,
      payload: { cart, sum },
    })
  }
}

// инкримент декремент + -
export const cartIncrement = (id) => {
  return (dispatch, getState) => {
    const { cart } = getState().cart
    const { catalog, mapCatalog } = getState().catalog
    const index = mapCatalog[id]
    const { reserve } = catalog[index]

    let count = ++cart[id]
    if (count > reserve) return

    dispatch(setCart({ ...cart, [id]: count }))
  }
}

export const cartDecrement = (id) => {
  return (dispatch, getState) => {
    const { cart } = getState().cart

    let count = --cart[id]
    if (count === 0) {
      dispatch(removeFromCart(id))
      return
    }

    dispatch(setCart({ ...cart, [id]: count }))
  }
}

// добавление в корзину и в карту
export const addToCart = (id) => {
  return (dispatch, getState) => {
    const { cart } = getState().cart

    const newCart = { ...cart, [id]: 1 }

    dispatch(addToMapCart(id))
    dispatch(setCart(newCart))
  }
}

// удаление из корзины и из карты
export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    const { cart } = getState().cart
    const newCart = { ...cart }
    delete newCart[id]

    if (!cart || !Object.keys(newCart).length) {
      dispatch(clearCart())
      return
    }
    dispatch(removeFromMapCart(id))
    dispatch(setCart(newCart))
  }
}

// очистка корзины и карты
export const clearCart = () => {
  return (dispatch) => {
    localStorage.removeItem('cart')
    dispatch(clearMapCart())

    dispatch({
      type: CLEAR_CART,
    })
  }
}

// расчет суммы
export const reduceSumCart = ({ cart, catalog, mapCatalog }) => {
  return Object.keys(cart).reduce((total, key) => {
    // const index = catalog.findIndex((item) => item.id === key)
    const index = mapCatalog[key]
    const { price } = catalog[index]
    return total + +(price * cart[key])
  }, 0)
}

//  инициализация корзины
export const initCart = () => {
  return async (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart && Object.keys(cart).length) {
      dispatch(initMapCart(cart))
      await dispatch(loadCatalog())
      dispatch(setCart(cart))
    }
  }
}

// отправка заказа на сервер
export const toOrderCart = () => {
  return async (dispatch, getState) => {
    try {
      const { cart: oldCart, sum } = getState().cart
      const { token } = getState().auth
      const { catalog, mapCatalog } = getState().catalog
      const { orders } = getState().orders

      const cart = Object.keys(oldCart).map((key) => {
        const index = mapCatalog[key]
        return { id: key, count: oldCart[key], price: catalog[index].price }
      })

      const response = await fetchToOrder({ cart, sum }, token)

      dispatch(clearCart())
      dispatch(updateCatalog())
      dispatch(showAlert('success', response.data.message))

      if (orders && orders.length) {
        dispatch(loadOrders())
      }
    } catch {
      dispatch(showAlert('danger', 'Оказия при отправке заказа!'))
    }
  }
}
