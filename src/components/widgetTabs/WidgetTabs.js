/*
 * @Author: hejp
 * @Date:   11:35
 * @Last Modified by:   hejp
 * @Last Modified time: 11:35
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getPages} from "@store/page.redux";
import {cloneDeep} from '@util'
import {getWidgets}  from "@store/widgets.redux";
import './index.scss'


@connect(
    // 状态映射
    state => ({
        pages: state.page.pages,
        pageIndex: state.page.checkedPageIndex,
        nav: state.nav.list
    }),
    {
        getPages,
        getWidgets
    }
)
class WidgetTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 选中的菜单
            active: undefined
        }
    }

    /**
     * 菜单选项卡
     * @param index
     */
    navChangeHandler = (index) => {
        let widgetNav = this.props.nav;
        for (let i = 0, len = widgetNav.length; i < len; i++) {
            if (i === index) {
                widgetNav[i].checked = true
            } else {
                widgetNav[i].checked = false
            }
        }
        this.props.getWidgets(widgetNav);
        this.setState({
            active: index
        })
    }
    /**
     * 隐藏菜单
     */
    hideNavDialogHandler = () => {
        let widgetNav = this.props.nav;
        for (let i = 0, len = widgetNav.length; i < len; i++) {
            widgetNav[i].checked = false
        }
        this.props.getWidgets(widgetNav);
        this.setState({
            active: undefined
        })
    }

    /**
     * 添加组件
     * @param item
     */
    addWidget = (item) => {
        let pages = this.props.pages,
            pageIndex = this.props.pageIndex,
            widgets = pages[pageIndex].widgets;
        widgets.push(cloneDeep(item));
        this.props.getPages(pages);
    }

    render() {
        const nav = this.props.nav;
        return (
            <div className="widget-tabs">
                <div className="widget-tabs-hd">
                    {nav && nav.map((item, index) => (
                        <div
                            className={'widget-tabs-tab ' + (item.checked ? 'widget-tabs-tab-active' : '')}
                            key={index}
                            onClick={() => this.navChangeHandler(index, item)}>
                            <span className="daq-web" dangerouslySetInnerHTML={{__html: item.icon}}></span>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="widget-tabs-content" style={{
                    display: this.state.active !== undefined ? 'block' : 'none'
                }}>
                    <div className="mask" onClick={this.hideNavDialogHandler}></div>
                    {
                        nav && nav.map((item, index) => (
                            <div
                                className="widget-tabs-tabpane"
                                key={index}
                                style={{
                                    display: item.checked ? 'block' : 'none'
                                }}>
                                <ul className="widget-nav-list">
                                    {
                                        item.data && item.data.map((a, b) => (
                                            <li
                                                onClick={() => this.addWidget(a)}
                                                className="widget-nav-item"
                                                key={b}>
                                                <div className="photo">
                                                    <img src={a.image} alt="" width="100%" height="100%"/>
                                                </div>
                                                <p className="name">{a.name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default WidgetTabs;
