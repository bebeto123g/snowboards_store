import React from 'react'
import ReactDOM from 'react-dom'
import 'react-bootstrap/bootstrap.min.css'
import './global.sass'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

// TODO авторизация с модалкой
// TODO websoket изучить!!!! WebGL, Audio
// TODO window
