import React from 'react'

import { browserHistory, Router, Route, IndexRoute, IndexRedirect, Redirect } from 'react-router'
import { Provider, } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

//route
import ms1Route from './ms1/ms1Route'
import commonRoute from './common/commonRoute'


const routes = {
  path: '/',
  exat: true,
  indexRoute: {
    onEnter: (nextState, replace) => replace(`${nextState.location.pathname}ms1/sample`)
  },
  childRoutes: [
    ms1Route,
    // 업무 라우터 추가


    commonRoute,
  ]
}


export default () => (
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>
)