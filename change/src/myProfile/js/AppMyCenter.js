/**
 * Created by qinchen on 2017/5/17.
 */
import React, {Component} from 'react';

import {  Link }from 'react-router'


class AppCenter extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="app-center">
                <div className="app-centerOne">
                    <div className="app-center-one">
                        <div>我的设置</div>
                    </div>
                    <div className="app-center-two">
                        <div>积分规则</div>
                    </div>
                    <div className="app-center-three">
                        <div>
                            <Link to="/PlatformRule">平台规则</Link>
                        </div>

                    </div>
                    <div className="app-center-four">
                        <div>常见问题</div>
                    </div>
                    <div className="app-center-five">
                        <div>意见反馈</div>
                    </div>
                    <div className="app-center-six">
                        <div>联系无讼</div>
                    </div>
                </div>
            </div>
        );

    }
}
export default AppCenter;


// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={AppCenter}/>
//         <Route path="／PlatformRule" component={PlatformRule} />
//     </Router>
// ), document.getElementById('app'));


