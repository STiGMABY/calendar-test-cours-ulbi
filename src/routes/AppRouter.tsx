import React from 'react'
import { Paths, privateRoutes, publicRoutes } from './routes'
import { Redirect, Route, Switch } from 'react-router'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const AppRouter = () => {

  const isAuth = useTypedSelector(state => state.authReducer.isAuth)

  //console.log(privateRoutes)

  return (
    isAuth
      ?
      <Switch>
        { privateRoutes.map(route => (
          <Route
            key={ route.path }
            path={ route.path }
            component={ route.component }
            exact={ route.exact }
          />
        )) }
        <Redirect to={ Paths.EVENT_PAGE }/>
      </Switch>
      :
      <Switch>
        { publicRoutes.map(route => (
          <Route
            key={ route.path }
            path={ route.path }
            component={ route.component }
            exact={ route.exact }
          />
        )) }
        <Redirect to={ Paths.LOGIN }/>
      </Switch>
  )
}