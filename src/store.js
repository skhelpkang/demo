
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import menuReducer from './layout/reducer/menuReducer';
import userReducer from './ms1/user/reducer/userReducer';

import sampleReducer from './ms1/sample/reducer/sampleReducer';


const rootReducer = combineReducers({
  //
  routing: routerReducer,

  menuState: menuReducer,
  userState: userReducer,

  sampleState: sampleReducer,
});


let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
if (process.env.NODE_ENV === "production") composeEnhancers = compose

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
