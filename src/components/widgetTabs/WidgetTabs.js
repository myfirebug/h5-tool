/*
 * @Author: hejp
 * @Date:   11:35
 * @Last Modified by:   hejp
 * @Last Modified time: 11:35
 */
import React, {Component} from 'react';
import widgetNav from '@config/widget.nav.config.js'
import './index.scss'

class WidgetTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 所有菜单数据
            widgetNav: widgetNav,
            // 选中的菜单
            active: undefined
        }
    }

    /**
     * 菜单选项卡
     * @param index
     */
    navChangeHandler = (index) => {
        let widgetNav = this.state.widgetNav;
        for (let i = 0, len = widgetNav.length; i < len; i++) {
            if (i === index) {
                widgetNav[i].checked = true
            } else {
                widgetNav[i].checked = false
            }
        }
        this.setState({
            widgetNav: widgetNav,
            active: index
        })
    }

    hideNavDialogHandler = () => {
        let widgetNav = this.state.widgetNav;
        for (let i = 0, len = widgetNav.length; i < len; i++) {
            widgetNav[i].checked = false
        }
        this.setState({
            widgetNav: widgetNav,
            active: undefined
        })
    }

    render() {
        return (
            <div className="widget-tabs">
                <div className="widget-tabs-hd">
                    {this.state.widgetNav.map((item, index) => (
                        <div
                            className={'widget-tabs-tab ' + (item.checked ? 'widget-tabs-tab-active' : '')}
                            key={index}
                            onClick={() => this.navChangeHandler(index)}>
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
                        this.state.widgetNav.map((item, index) => (
                            <div
                                className="widget-tabs-tabpane"
                                key={index}
                                style={{
                                    display: item.checked ? 'block' : 'none'
                                }}>
                                <ul className="widget-nav-list">
                                    {
                                        item.data.map((a, b) => (
                                            <li
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
