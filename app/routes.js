import workingSampleRoute from './working-sample/workingSampleRoute'
import commonRoute from './common/commonRoute'

export default {
  path: '/',
  exat: true,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/workingSample/sampleList')
  },
  childRoutes: [
    workingSampleRoute,
    // 업무 라우터 추가


    commonRoute,
  ]
}
