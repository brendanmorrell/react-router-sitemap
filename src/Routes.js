import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

const Links = () => (
  <>
    <Link to="/">home</Link>
    <br />
    <Link to="/dashboard">dashboard</Link>
    <br />
    <Link to="/stores">stores</Link>
    <br />
    <Link to="/login">login</Link>
  </>
)

const Component = ({ location: { pathname } }) => (
  <>
    <div>this is the {`${pathname}`} page</div>
    <Links />
  </>
)

export const Routes = () => (
  <Switch>
    <Route exact to="/" component={Component} />
    <Route exact to="/dashboard" component={Component} />
    <Route exact to="/stores" component={Component} />
    <Route exact to="/login" component={Component} />
  </Switch>
)
export default Routes
