/*
 * @Author: hejp
 * @Date:   14:17
 * @Last Modified by:   hejp
 * @Last Modified time: 14:17
 */
import React, {Component} from 'react';
// 头部组件
import Header from '@components/header/Header'
import './index.scss'

class Home extends Component {
    render() {
        return (
            <section className="app">
                {/*头*/}
                <Header></Header>
                {/*主体*/}
                <section className="main">
                </section>
            </section>
        );
    }
}

export default Home;
