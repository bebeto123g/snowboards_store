import HomePage from '../page/HomePage'
import CatalogPage from '../page/CatalogPage'
import CartPage from '../page/CartPage'
import BrandsPage from '../page/BrandsPage'

export const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/catalog', component: CatalogPage, exact: true },
  { path: '/cart', component: CartPage, exact: true },
  { path: '/brands', component: BrandsPage, exact: true },
]

// export const authRoutes = { path: '/auth', component: Auth, exact: true }
