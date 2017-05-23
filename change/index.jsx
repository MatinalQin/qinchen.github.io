/**
 * Created by qinchen on 2017/5/16.
 */

import React from 'react';

import {render} from 'react-dom';

import {hashHistory } from 'react-router-dom';

import RouterIndex from './src/myProfile/js/RouterIndex';

render(
    <RouterIndex history={hashHistory} />,
    document.getElementById('app')
);
