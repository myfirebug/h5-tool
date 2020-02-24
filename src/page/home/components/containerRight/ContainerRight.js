/*
 * @Author: hejp
 * @Date:   10:09
 * @Last Modified by:   hejp
 * @Last Modified time: 10:09
 */
import React, {Component} from 'react';
import {
    Tabs,
    Icon
} from 'antd';
import './index.scss'
import {connect} from 'react-redux'
import {getPages} from "@store/page.redux";

const {TabPane} = Tabs;

@connect(
    // 状态映射
    state => ({
        pages: state.page.pages,
        pageIndex: state.page.checkedPageIndex
    }),
    {
        getPages
    }
)
class ContainerLeft extends Component {
    /**
     * 是否显示该组件
     * @param index
     */
    changeShowWidget = (index) => {
        let pages = this.props.pages,
            pageIndex = this.props.pageIndex,
            datas = pages.length ? pages[pageIndex || 0] : {};
        if (datas.widgets) {
            for (let i = 0, len = datas.widgets.length; i < len; i++) {
                if (index === i) {
                    datas.widgets[i].checked = !datas.widgets[i].checked
                }
            }
        }

        this.props.getPages(pages);
    }
    render() {
        let datas = this.props.pages.length ? this.props.pages[this.props.pageIndex || 0] : {}
        return (
            <div className="container-right">
                <Tabs defaultActiveKey="2">
                    <TabPane tab="页面属性" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="组件管理" key="2">
                        <ul className="components-list">
                            {
                                datas && datas.widgets ?
                                    datas.widgets.map((item, index) => (
                                        <li className="components-item" key={index}>
                                            <div className="eyes" onClick={() => this.changeShowWidget(index)}>
                                                {
                                                    item.checked ?
                                                        <Icon type="eye"/> : <Icon type="eye-invisible"/>
                                                }
                                            </div>
                                            <p className="title">{item.name}</p>
                                            <Icon type="close-circle" />
                                        </li>
                                    )) : null
                            }
                        </ul>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default ContainerLeft;
