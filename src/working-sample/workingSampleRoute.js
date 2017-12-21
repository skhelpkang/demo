import React, { Fragment } from 'react'

import { Route, IndexRoute, IndexRedirect } from 'react-router'

import LayoutContainer from '../common/layout/container/LayoutContainer'

import SampleContainer from './sample/container/SampleContainer'
import SampleListContainer from './sample/container/SampleListContainer'

const sampleRoute = {
    path: 'sample',
    component: SampleContainer,
}
const sampleListRoute = {
    path: 'sampleList',
    component: SampleListContainer,
}

const menuRoute = {
    path: 'menus/:menuName',
    component: SampleContainer,
}

export default {
    path: '/workingSample',
    component: LayoutContainer,
    childRoutes: [
        sampleRoute,
        menuRoute,
        sampleListRoute,
    ]
}
