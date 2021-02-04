import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { routes } from './routes'

const SwitchRoutes = () => {
  const { isLogin } = useSelector((state) => state.isLogin)

  return (
    <Switch>
      {routes.map((route) => {
        if (!isLogin && route.isAuth) {
          return
        }
        return <Route {...route} key={route.path} />
      })}
      <Redirect to={'/'} />
    </Switch>
  )
}

export default SwitchRoutes
