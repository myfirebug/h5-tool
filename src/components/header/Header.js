/*
 * @Author: hejp
 * @Date:   13:25
 * @Last Modified by:   hejp
 * @Last Modified time: 13:25
 */
import React, {Component} from 'react'
import {
    Button,
    Dropdown,
    Icon,
    Menu
} from 'antd'
// 组件选项卡
import WidgetTabs from '@components/widgetTabs/WidgetTabs'
import './index.scss'

class FrameHead extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    退出
                </Menu.Item>
            </Menu>
        )
        return (
            <header className="geek-header">
                <div className="left">
                    <Button type="primary">退出编辑</Button>
                </div>
                <WidgetTabs></WidgetTabs>
                <div className="right">
                    <nav className="nav">
                        <a onClick={e => e.preventDefault()}><span className="daq-web">&#xe708;</span>保存</a>
                        <a onClick={e => e.preventDefault()}><span className="daq-web">&#xe609;</span>预览</a>
                        <a onClick={e => e.preventDefault()}><span className="daq-web">&#xe604;</span>发布</a>
                    </nav>
                    <Dropdown overlay={menu}>
                        <a onClick={e => e.preventDefault()} style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            marginLeft: 10
                        }}>
                            admin <Icon type="down"/>
                        </a>
                    </Dropdown>
                </div>
            </header>
        );
    }
}

export default FrameHead;
