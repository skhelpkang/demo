
// JavaScript
import React, { Fragment } from 'react';

import { browserHistory, Router, Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { Provider, connect } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

// Base
import PageNotFoundView from './common/view/PageNotFoundView';

import ms1Routes from './ms1/ms1Routes';
{/* <Redirect to= '/ms1/sample' /> */}
const routes = {
  path: '/',
  exat: true,
  indexRoute: {
    onEnter: (nextState, replace) => replace(`${nextState.location.pathname}ms1/sample`)
  },
  childRoutes: [
    ms1Routes,
    {
      path: '*',
      component: PageNotFoundView,
    },
  ]
}


export default () => (
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>
)