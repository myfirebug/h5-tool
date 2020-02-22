import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
// 路由缓存组件
import LoadableComponent from '@components/LoadableComponent';
// 首页
const Home = LoadableComponent(() => import('../page/home/Home'));
class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/*首页*/}
                    <Route path="/home" component={Home}></Route>
                    <Redirect to='/home' />
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;
