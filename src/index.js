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


// TODO Алерты сделать в модалке, корзину строки, посмотреть закладки

// TODO при полчении каталога добавить поле inCart, после ухода со страницы каталога обновить состояние

// TODO страницы всех заказов пользователя и каждый заказ по отдельности (чтобы было)
// TODO страница профиля пользователя

// TODO сделать выпадающее меню для профиля с ссылками на ПРОФИЛЬ, ЗАКАЗЫ и ВЫХОД

// TODO модалка для подтверждения
// TODO модалка для обратного звонка

// TODO websoket изучить!!!! WebGL, Audio
// TODO на сервере можно будет редактировать еще не высланный заказ, изменять статус
