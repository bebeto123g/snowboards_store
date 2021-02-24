import HomePage from '../page/HomePage'
import CatalogPage from '../page/CatalogPage'
import CartPage from '../page/CartPage'
import BrandsPage from '../page/BrandsPage'
import OrdersPage from '../page/OrdersPage'
import ProfilePage from '../page/ProfilePage'
import OrderDetailsPage from '../page/OrderDetailsPage'

export const routes = [
  { path: '/', component: HomePage, exact: true, isAuth: false },
  { path: '/catalog', component: CatalogPage, exact: true, isAuth: false },
  { path: '/cart', component: CartPage, exact: true, isAuth: false },
  { path: '/brands', component: BrandsPage, exact: true, isAuth: false },
  { path: '/profile', component: ProfilePage, exact: true, isAuth: true },
  { path: '/orders', component: OrdersPage, exact: true, isAuth: true },
  {
    path: '/orders/:id',
    component: OrderDetailsPage,
    exact: true,
    isAuth: true,
  },
]
