import React from 'react'

import { browserHistory, Router, Route, IndexRoute, IndexRedirect, Redirect } from 'react-router'
import { Provider, } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'

import store from './store'

const history = syncHistoryWithStore(browserHistory, store)


export default () => (
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>
)