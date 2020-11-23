import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './routes'

const SwitchRoutes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route {...route} key={route.path}/>
      ))}
      <Redirect to={'/'}/>
    </Switch>
  )
}

export default SwitchRoutes
