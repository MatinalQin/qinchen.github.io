/**
 * Created by qinchen on 2017/5/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import MyProfilePage from './src/myProfile/js/MyProfilePage';
import { Router, Route, Link,hashHistory } from 'react-router';



    ReactDOM.render(
    <MyProfilePage />,
    document.getElementById('app')
);