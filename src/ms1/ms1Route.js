import React, { Fragment } from 'react'

import { Route, IndexRoute, IndexRedirect } from 'react-router'

import LayoutContainer from '../common/layout/container/LayoutContainer'

import SampleContainer from './sample/container/SampleContainer'

const sampleRoute = {
    path: 'sample',
    component: SampleContainer,
}

const menuRoute = {
    path: 'menus/:menuName',
    component: SampleContainer,
}

export default {
    path: '/ms1',
    component: LayoutContainer,
    childRoutes: [
        sampleRoute,
        menuRoute,
    ]
}
