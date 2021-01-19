import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import reduxThunk from 'redux-thunk'

import { alertReducer } from './alert/alertReducer'
import { loadingReducer } from './loading/loadingReducer'
import { catalogReducer } from './catalog/catalogReducer'
import { cartReducer } from './cart/cartReducer'
import { authReducer } from './auth/authReducer'
import { modalReducer } from './modal/modalReducer'

// для использования Redux-devTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const store = createStore(
  combineReducers({
    alert: alertReducer,
    loading: loadingReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    auth: authReducer,
    modal: modalReducer,
  }),
  composeEnhancers(applyMiddleware(reduxThunk))
)
