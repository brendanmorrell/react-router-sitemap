import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createBrowserHistory } from 'history'
import Routes from './Routes'
import { Router } from 'react-router-dom'

const history = createBrowserHistory()
const renderApp = () => (
  <Router history={history}>
    <Routes />
  </Router>
)

ReactDOM.render(renderApp(), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
