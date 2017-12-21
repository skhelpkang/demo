import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'


import workingSampleReducer from "./working-sample/workingSampleReducer"

import commonReducer from "./common/commonReducer"

const rootReducer = combineReducers({
  //
  routing: routerReducer,
  ...commonReducer,

  ...workingSampleReducer,
  //업무 리듀서 추가
  
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
if (process.env.NODE_ENV === "production") composeEnhancers = compose

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
)
