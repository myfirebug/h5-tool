/*
 * @Author: hejp
 * @Date:   10:09
 * @Last Modified by:   hejp
 * @Last Modified time: 10:09
 */
import React, {Component} from 'react';
import {
    Button,
    Icon,
    Input
} from 'antd'
import {connect} from 'react-redux'
import {getPages, checkedPageIndex, copyPage, deletePage} from "@store/page.redux";
import './index.scss'

@connect(
    // 状态映射
    state => ({
        pages: state.page.pages,
        pageIndex: state.page.checkedPageIndex
    }),
    {
        getPages,
        checkedPageIndex,
        copyPage,
        deletePage
    }
)
class ContainerLeft extends Component {
    constructor (props) {
        super(props)
        this.state = {
            pageMenu: {
                // 是否显示右击菜单
                display: 'none',
                // left值
                left: 0,
                // top值
                top: 0
            },
            // 是否展示页面的编辑标题
            isShowPageTitleInp: []
        }

        this.timmer = null;
    }
    /**
     * 单击选中某一页
     */
    chosePageMenu = (index) => {
        let pages = this.props.pages;
        for (let i=  0, len = pages.length; i < len; i++) {
            if (i === index) {
                pages[i].checked = true
            } else {
                pages[i].checked = false
            }
        }
        this.props.checkedPageIndex(index);
        this.props.getPages(pages);
    }

    /**
     * 显示菜单
     */
    showPageMenu = (e, data, index) => {
        this.chosePageMenu(index);
        e.preventDefault();
        e.persist();
        this.setState({
            pageMenu: {
                // 是否显示右击菜单
                display: 'block',
                // left值
                left: e.pageX,
                // top值
                top: e.pageY
            }
        })

    }

    /**
     * 隐藏菜单
     */
    hidePageMenu = () => {
        this.setState({
            pageMenu: {
                display: 'none',
                // left值
                left: 0,
                // top值
                top: 0
            }
        })
    }

    /**
     * 编辑页面标题
     */
    pageTitleChangeHandler = (e, index) => {
        let target = e.target,
            value = target.value
        if (!value) {
            target.value = `第${index + 1}页`
        }
        if (this.timmer) {
            clearTimeout(this.timmer);
        }
        setTimeout(() => {
            let pages = this.props.pages;
            pages[index].name = value || `第${index + 1}页`;
            this.props.getPages(pages);
        }, 100)
    }

    /**
     * 复制页面
     */
    copyPage = () => {
        // 隐藏菜单
        this.hidePageMenu();
        this.props.copyPage();
    }

    /**
     * 删除页面
     */
    deletePage = () => {
        // 隐藏菜单
        this.hidePageMenu();
        this.props.deletePage();
    }

    componentWillUnmount () {
        if (this.timmer) {
            clearTimeout(this.timmer);
        }
    }


    render() {
        return (
            <div className="container-left">
                {/*按钮组*/}
                <div className="button-groups">
                    <Button
                        type="primary"
                        icon="setting">方案设置</Button>
                    <Button
                        type="primary"
                        icon="plus">添加页面</Button>
                </div>
                {/*页面管理*/}
                <div className="page-management">
                    <div className="page-management-header">页面管理</div>
                    <div className="page-management-body">
                        {/*页面列表*/}
                        <ul className="page-list">
                            {
                                this.props.pages.map((item, index) => (
                                    <li
                                        onClick={() => this.chosePageMenu(index)}
                                        onContextMenu={(e) => this.showPageMenu(e, item, index)}
                                        className={`page-item ${item.checked ? 'active' : ''}`}
                                        key={index}>
                                        <span
                                            className="page-number">
                                                {index < 10 ? '0' + (index + 1) : (index + 1)}
                                            </span>
                                        {
                                            item.checked ?
                                                <Input
                                                    placeholder={item.name}
                                                    defaultValue={item.name}
                                                    onChange={(e) => this.pageTitleChangeHandler(e, index)} /> :
                                                <div className="page-title">{item.name}</div>
                                        }
                                        <div className="page-setting">
                                            <Icon type="more" />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="right-click-menu" style={{
                    display: this.state.pageMenu.display,
                    left: this.state.pageMenu.left,
                    top: this.state.pageMenu.top
                }}>
                    <div
                    onClick={this.copyPage}
                    className="right-click-menu-item">复制页面</div>
                    <div 
                    onClick={this.deletePage}
                    className="right-click-menu-item">删除页面</div>
                </div>
                <div
                    onClick={this.hidePageMenu}
                    className="mask"
                    style={{
                    display: this.state.pageMenu.display
                }}></div>
            </div>
        );
    }
}

export default ContainerLeft;
