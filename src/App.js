import React, {Component} from 'react';
import {Icon} from 'antd'
import Routers from './router/index'

class App extends Component {
    render() {
        return (
            <div>
                <Routers/>
                <div id="js_loading" className="ui-loading-wrap" style={{display: 'none'}}>
                    <div className="ui-loading">
                        <Icon type="loading" />
                        <div className="ui-loading-text">loading...</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
