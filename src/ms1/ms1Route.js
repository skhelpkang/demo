import React, { Fragment } from 'react';

import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Layout from '../layout/container/LayoutContainer';

import Sample from './sample/container/SampleContainer';

const sampleRoute = {
    path: 'sample',
    component: Sample,
}

const menuRoute = {
    path: 'menus/:menuName',
    component: Sample,
}

export default {
    path: '/ms1',
    component: Layout,
    childRoutes: [
        sampleRoute,
        menuRoute,
    ]
}
