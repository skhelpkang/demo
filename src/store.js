
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import menuReducer from './layout/reducer/menuReducer';

import ms1Store from "./ms1/ms1Store"

const rootReducer = combineReducers({
  //
  routing: routerReducer,

  menuState: menuReducer,

  ...ms1Store,
  
});


let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
if (process.env.NODE_ENV === "production") composeEnhancers = compose

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
