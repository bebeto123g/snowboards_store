import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import reduxThunk from 'redux-thunk'

import { alertReducer } from './alert/alertReducer'
import { loadingReducer } from './loading/loadingReducer'

// для использования Redux-devTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const store = createStore(
  combineReducers({
    alert: alertReducer,
    loading: loadingReducer,
  }),
  composeEnhancers(applyMiddleware(reduxThunk))
)
