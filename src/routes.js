import ms1Route from './ms1/ms1Route'
import commonRoute from './common/commonRoute'

export default {
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
