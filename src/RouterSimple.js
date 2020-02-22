/*
 * @Author: hejp
 * @Date:   10:25
 * @Last Modified by:   hejp
 * @Last Modified time: 10:25
 */
import React, {Component} from 'react';
import { Link, Route, HashRouter, Switch, Redirect} from 'react-router-dom'
import {login} from './store/user.redux'
import { connect } from 'react-redux'

function My(props) {
    return (
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/foo">foo</Link></li>
            </ul>
            {/*路由配置*/}
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <PrivateRoute path="/about" component={About}></PrivateRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/detail/:course" component={Detail}></Route>
                <Route component={NoMatch}></Route>
            </Switch>
        </div>
    )
}

// 路由守卫，定义可以验证的高阶组件
@connect(
    // 状态映射
    state => ({isLogin: state.user.isLogin})
)
class PrivateRoute extends Component {
    render() {
        const { isLogin, component: Component, ...rest } = this.props;
        return (<Route {...rest}
            render = { props =>
                isLogin ? (<Component {...rest} />) : (<Redirect to={{ pathname: '/login', state: {from: this.props.location.pathname} }}/>)
            }></Route>)
    }
}
/* function PrivateRoute ({component: Component, ...rest}) {
    return (<Route
        {...rest}
        render = {
        props => auth.isLogin ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: {from: props.location.pathname} }}/>
    }></Route>)
} */
@connect(
    // 状态映射
    state => ({isLogin: state.user.isLogin}),
    {
        login
    }
)
class Login extends Component {
    render() {
        const from = (this.props.location.state && this.props.location.state.from) || '/';
        if (this.props.isLogin) {
            return <Redirect to={from}/>
        }
        return (
            <div>
                <p>请先登录</p>
                <button onClick={() => this.props.login()}>登录</button>
            </div>
        );
    }
}

function Home (props) {
    return (
        <ul>
            <li><Link to="/detail/web">web</Link></li>
            <li><Link to="/detail/node">node</Link></li>
            <li><Link to="/detail/javascript">javascript</Link></li>
        </ul>
    )
}

function NoMatch () {
    return <div>404</div>
}

function About () {
    return (
        <div>
            <h1>用户中心</h1>
            <div>
                <div><Link to="/about/me">个人信息</Link></div>
                <div><Link to="/about/order">订单</Link></div>
            </div>
            <Switch>
                <Route path="/about/me" component={() => (<div>我的信息</div>)}></Route>
                <Route path="/about/order" component={() => (<div>我的订单</div>)}></Route>
                <Redirect to="/about/me"></Redirect>
            </Switch>
        </div>
    )
}

function Detail (props) {
    console.log(props)
    return (
        <div>
            { props.match.params.course }
            <button onClick={props.history.goBack}>返回</button>
            <button onClick={() => (props.history.push({pathname: '/', state: {a: 1}}))}>回首页</button>
        </div>
    )
}



class RouterSimple extends Component {
    render() {
        return (
            <HashRouter>
                <My />
            </HashRouter>
        );
    }
}

export default RouterSimple;
