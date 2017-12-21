import React, { Component } from 'react';

import LayoutContainer from './layout/container/LayoutContainer'
import PageNotFoundView from './layout/view/PageNotFoundView'

export default {
    path: '*',
    component: LayoutContainer,
    indexRoute: {
        component: PageNotFoundView,
    }
}