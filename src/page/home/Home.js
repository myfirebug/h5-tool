/*
 * @Author: hejp
 * @Date:   14:17
 * @Last Modified by:   hejp
 * @Last Modified time: 14:17
 */
import React, {Component} from 'react';
// 头部组件
import Header from '@components/header/Header'
// 主题左边
import ContainerLeft from './components/containerLeft/ContainerLeft'
// 主题中间
import ContainerCenter from './components/containerCenter/ContainerCenter'
// 主题右边
import ContainerRight from './components/containerRight/ContainerRight'
import './index.scss'

class Home extends Component {
    render() {
        return (
            <section className="app">
                {/*头*/}
                <Header></Header>
                {/*主体*/}
                <section className="container">
                    <ContainerLeft></ContainerLeft>

                    <ContainerCenter></ContainerCenter>

                    <ContainerRight></ContainerRight>
                </section>
            </section>
        );
    }
}

export default Home;
