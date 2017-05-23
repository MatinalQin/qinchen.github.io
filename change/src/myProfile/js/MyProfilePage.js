/**
 * Created by qinchen on 2017/5/17.
 */

import React, { Component } from 'react';
import AppCenter from './AppMyCenter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2 className="app-name">姓名</h2>
                    <h2 className="app-number">积分5</h2>

                </div>
                <AppCenter />
            </div>
        );
    }
}

export default App;
