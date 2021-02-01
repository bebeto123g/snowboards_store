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

// TODO автоудаление токена
// TODO валидация формы, попробовать готовые решения ЗАВТРА!
// TODO websoket изучить!!!! WebGL, Audio
// TODO изменить структуру cart в заказах - добавить текущую цену за товар
// TODO страницы всех заказов пользователя и каждый заказ по отдельности
// TODO на сервере можно будет редактировать еще не высланный заказ, изменять статус