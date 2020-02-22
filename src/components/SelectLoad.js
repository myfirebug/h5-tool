/*
 * @Author: hejp
 * @Date:   9:55
 * @Last Modified by:   hejp
 * @Last Modified time: 9:55
 */
import React, {Component} from 'react';
import { Select } from 'antd';
import Ajax from '../service/index'
const { Option } = Select;

/**
 * this.props
 * width: 宽度
 * placeholder:未选择时显示
 * label:标签
 * requestName:api接口名称
 * searchName:搜索关键词
 */
class SelectLoad extends Component {
    constructor (props) {
        super(props);
        let {params, searchName} = props;
        let privateParams = {}
        // 判断是否有参数
        if (params) {
            privateParams = {...params}
        } else {
            privateParams = {
                page: 1,
                pageSize: 10
            }
        }
        // 判断是否有搜索字段
        if (searchName) {
            privateParams[searchName] = ''
        }

        this.state = {
            // 数据列表
            list: [],
            // 接口返回的page
            page: [],
            // 是否加载接口
            flag: true,
            // 接口参数
            params: privateParams
        }
    }

    /**
     * 调用接口
     */
    componentDidMount () {
        this.init(this.state.params)
    }

    /**
     * 初始化接口
     * @param params
     */
    init = (params) => {
        if (this.state.flag) {
            this.setState({
                flag: false
            })
            Ajax[this.props.requestName](params)
                .then(res => {
                    this.setState(state => ({
                        list: params.page === 1 ? res.datas : [...state.list, ...res.datas],
                        page: res.page,
                        flag: true
                    }))
                })
        }
    }
    /**
     * 滚动加载接口数据
     * @param e
     */
    companyScroll = (e) => {
        e.persist();
        const { target } = e;
        if (target.scrollTop + target.offsetHeight > target.scrollHeight - 20
            && this.state.params.page < this.state.page.totalPage
            && this.state.flag) {
            // 设置状态
            this.setState((state) => ({
                params: Object.assign(state.params, {page: state.params.page + 1})
            }), () => {
                this.init(this.state.params)
            })
        }
    }
    /**
     * 搜索
     * @param keyword
     */
    searchHandler = (keyword) => {
        this.setState(state => ({
            params: {...state.params, [this.props.searchName]: keyword, page: 1}
        }), () => {
            this.init(this.state.params)
        })
    }
    /**
     * 获取选中的值
     * @param val
     */
    getValue = (val) => {
        this.props.onChange(val)
    }
    render() {
        return (
            <div style={{display: 'inline-block', paddingRight: 20}}>
                {this.props.label && <label style={{paddingRight: 5}}>{this.props.label}：</label>}
                <Select
                    onPopupScroll={this.companyScroll}
                    {...this.props}
                    onChange={this.getValue}
                    onSearch={this.searchHandler}
                    filterOption={ () => {return true} }
                    showSearch={this.props.searchName ? true : false}
                    labelInValue={true}
                    style={{width: this.props.width || 200}}>
                    {
                        this.state.list.map((item, index) => (
                            <Option value={item.id} key={index}>{item.name}</Option>
                        ))
                    }
                </Select>
            </div>
        );
    }
}

export default SelectLoad;
