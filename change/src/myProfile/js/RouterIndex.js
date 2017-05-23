/**
 * Created by qinchen on 2017/5/18.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router-dom'


import MyProfilePager from './MyProfilePage'
import PlatformRule from './PlatformRule'




class RouterIndex extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={MyProfilePager}>
                    {/*<IndexRoute component={AppMyCenter}/>*/}
                    <Route path='PlatformRule' component={PlatformRule}/>
                    {/*<Route path='detail/:id' component={Detail}/>*/}
                    {/*<Route path="*" component={NotFound}/>*/}
                </Route>
            </Router>
        )
    }
}

export default RouterIndex

// ReactDom.render((
//     <HashRouter>
//         <div>
//             <Route path="/" component={MyProfilePager}/>
//             <Route path="/PlatformRule" component={PlatformRule}/>
//         </div>
//
//     </HashRouter>
// ), document.getElementById('app'));





