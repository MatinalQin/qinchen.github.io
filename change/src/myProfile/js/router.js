/**
 * Created by qinchen on 2017/5/18.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

render((
    <Router>
        <Route path="/" component={AppMyCenter}>
            <Route path="PlatformRule" component={PlatformRule} />
            {/*<Route path="inbox" component={Inbox}>*/}
                {/*<Route path="messages/:id" component={Message} />*/}
            {/*</Route>*/}
        </Route>
    </Router>
), document.body)

