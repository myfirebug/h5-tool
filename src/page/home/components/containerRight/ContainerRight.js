/*
 * @Author: hejp
 * @Date:   10:09
 * @Last Modified by:   hejp
 * @Last Modified time: 10:09
 */
import React, {Component} from 'react';
import {
    Tabs,
    Icon,
    Tooltip
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
            widgets = pages[pageIndex].widgets;
        widgets[index].show = !widgets[index].show
        this.props.getPages(pages);
    }
    /**
     * 删除页面某个组件
     * @param index
     */
    deletePageWidget = (index) => {
        let pages = this.props.pages,
            pageIndex = this.props.pageIndex,
            widgets = pages[pageIndex].widgets;
        widgets.splice(index, 1);
        this.props.getPages(pages);
    }
    /**
     *显示配置弹窗
     * @param index
     * @param item
     */
    showSetting = (index, item) => {
        let pages = this.props.pages,
            pageIndex = this.props.pageIndex,
            widgets = pages[pageIndex].widgets;
        for (let i = 0, len = widgets.length; i < len; i++) {
            if (index === i) {
                widgets[i].checked = true
            } else {
                widgets[i].checked = false
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
                                        <li className={`components-item ${item.checked ? 'active' : ''}`} key={index}>
                                            <div className="eyes" onClick={() => this.changeShowWidget(index)}>
                                                {
                                                    item.show ?
                                                        <Tooltip title="隐藏">
                                                            <Icon type="eye"/>
                                                        </Tooltip> :
                                                        <Tooltip title="显示">
                                                            <Icon type="eye-invisible"/>
                                                        </Tooltip>
                                                }
                                            </div>
                                            <p className="title">{item.name}</p>
                                            <Tooltip title="关闭">
                                                <Icon type="close-circle" onClick={() => this.deletePageWidget(index)}/>
                                            </Tooltip>
                                            <Tooltip title="设置" placement="topRight">
                                                <Icon type="setting"
                                                      onClick={() => this.showSetting(index, item)}
                                                      style={{
                                                          marginLeft: 10
                                                      }}/>
                                            </Tooltip>
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
