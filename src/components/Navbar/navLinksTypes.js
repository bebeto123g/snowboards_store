export const navLinksTypes = [
  { to: '/', exact: true, text: 'Главная', isAuth: false },
  { to: '/catalog', exact: false, text: 'Каталог', isAuth: false },
  { to: '/brands', exact: false, text: 'Брэнды', isAuth: false },
  { to: '/orders', exact: false, text: 'Заказы', isAuth: true },
  { to: '/profile', exact: false, text: 'Профиль', isAuth: true },
]
