/*
 * @Author: hejp
 * @Date:   10:16
 * @Last Modified by:   hejp
 * @Last Modified time: 10:16
 */
import React, {Component} from 'react';
import './index.scss'
import {connect} from 'react-redux'
import GeekLine from '@components/widget/geekLine/GeekLine'

@connect(
    // 状态映射
    state => ({
        pages: state.page.pages,
        pageIndex: state.page.checkedPageIndex
    })
)
class ContainerCenter extends Component {
    render() {
        let widgets = this.props.pages.length ? this.props.pages[this.props.pageIndex || 0] : {}
        return (
            <div className="container-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     width="100%"
                     height="100%"
                     id="canvas">
                    <defs>
                        <pattern
                            patternUnits="userSpaceOnUse"
                            id="p1"
                            x="0"
                            y="0"
                            width="10"
                            height="10"
                        >
                            <rect
                                x="0"
                                y="0"
                                stroke="#ddd"
                                fill="none"
                                width="10.5"
                                height="10.5"
                            ></rect>
                        </pattern>
                    </defs>
                    <rect id="wrapper" x="0" y="0" fill="url(#p1)" width="100%" height="100%"></rect>
                </svg>
                <div className="phone-wrapper">
                    <div className="phone-header">
                        {this.props.pages.length && this.props.pages[this.props.pageIndex].name}
                        </div>
                    <div className="phone-content">
                        {
                            widgets.widgets ?
                            widgets.widgets.map((item, index) => (
                                <div key={index} style={{
                                    display: item.checked ? 'block' : 'none'
                                }}>
                                    {item.component === 'GeekLine' && <GeekLine></GeekLine>}
                                </div>
                            )) : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerCenter;
