import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import reduxThunk from 'redux-thunk'

import { alertReducer } from './alert/alertReducer'
import { pageLoadingReducer } from './pageLoading/pageLoadingReducer'
import { catalogReducer } from './catalog/catalogReducer'
import { cartReducer } from './cart/cartReducer'
import { authReducer } from './auth/authReducer'
import { modalReducer } from './modal/modalReducer'
import { brandsReducer } from './brands/brandsReducer'
import { cartMapReducer } from './cartMap/cartMapReducer'
import { isLoginReducer } from './isLogin/isLoginReducer'

// для использования Redux-devTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const store = createStore(
  combineReducers({
    alert: alertReducer,
    pageLoading: pageLoadingReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    auth: authReducer,
    isLogin: isLoginReducer,
    modal: modalReducer,
    brands: brandsReducer,
    cartMap: cartMapReducer
  }),
  composeEnhancers(applyMiddleware(reduxThunk))
)
