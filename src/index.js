import React from 'react'
import ReactDOM from 'react-dom'
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

// TODO автовход по токену
// TODO в authActions добаить localStorage или Cookie
// TODO валидация формы, попробовать готовые решения ЗАВТРА!
// TODO при успешной авторизации показать значок ОКАЙ зеленый с анимацией и через секунду скрыть модалку
// TODO токен и прочая лабуда

// TODO websoket изучить!!!! WebGL, Audio
