/*
 * @Author: hejp
 * @Date:   15:21
 * @Last Modified by:   hejp
 * @Last Modified time: 15:21
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './index.scss'

@connect(
    // 状态映射
    state => ({
        scheme: state.scheme.name
    })
)
class WidgetFrame extends Component {
    render() {
        const header = this.props.header;
        return (
            <div className={`widget-frame ${this.props.scheme ? 'theme-' + this.props.scheme : ''}`}>
                {
                    header &&
                    header.show &&
                    <div
                        style={{
                            background: header.style && header.style.backgroundColor
                        }}
                        className="widget-frame-header">
                        {
                            header.title
                            && header.title.show
                            && <div className="title">{header.title.text}</div>
                        }
                        {
                            header.tabs
                            && header.tabs.show
                            && <div className="tabs">
                                {
                                    header.tabs.data
                                    && header.tabs.data.map((item, index) => (
                                        <span
                                            key={index}
                                            className={item.value === header.tabs.checked ? 'active' : ''}>
                                                {item.name}
                                            </span>
                                    ))
                                }
                            </div>
                        }
                    </div>
                }
                <div className="wedget-frame-body">
                    {this.props.children}
                </div>
                {
                    this.props.checked ?
                        <div className="resize-wrap">
                            <span className="tl"></span>
                            <span className="tr"></span>
                            <span className="tc"></span>
                            <span className="bl"></span>
                            <span className="br"></span>
                            <span className="bc"></span>
                            <span className="cl"></span>
                            <span className="cr"></span>
                        </div> : null
                }

            </div>
        );
    }
}


WidgetFrame.propTypes = {
    // API接口地址
    url: PropTypes.string,
    // 选择主题
    theme: PropTypes.string,
    // 样式名
    className: PropTypes.string,
    // 头部
    header: PropTypes.object,
    // 是否显示选中框
    checked: PropTypes.bool,
    // 事件
    frameData: PropTypes.object
};
WidgetFrame.defaultProps = {
    className: '',
    frameData: {},
    checked: false,
    header: {
        // 是否显示
        show: true,
        // 样式
        style: {
            // 背景颜色
            backgroundColor: ''
        },
        // 标题
        title: {
            show: true, //是否显示
            text: '四川文旅资源发布排行情况'
        },
        // 选项卡
        tabs: {
            show: true,
            // 字段名
            field: 'name',
            // 选中项
            checked: 'in',
            // 选项内容
            data: [
                {
                    name: '境内游客',
                    value: 'in'
                },
                {
                    name: '境外游客',
                    value: 'out'
                }
            ]
        }
    }
}

export default WidgetFrame;
