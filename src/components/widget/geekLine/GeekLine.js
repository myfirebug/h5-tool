/*
 * @Author: hejp
 * @Date:   17:24
 * @Last Modified by:   hejp
 * @Last Modified time: 17:24
 */
import React, {Component} from 'react';
// echarts组件
import ReactEcharts from '@components/reactEcharts/ReactEcharts'
// mock数据
import data from './mock.json'

import {connect} from 'react-redux'


@connect(
    // 状态映射
    state => ({
        scheme: state.scheme.name
    })
)
class GeekLine extends Component {
    constructor (props) {
        super(props)
        this.state = {
            option: {}
        }
    }
    componentDidMount () {
        console.log(this.props.scheme);
        this.getEchartsData(data);
    }
    // 获取echarts数据
    getEchartsData = (data) => {
        let charts = data.data.content.charts[0];
        this.renderEcharts(charts);
    }
    // 渲染echarts
    renderEcharts = (data) => {
        let xAxisData = [],
            series = [],
            axisLabels = data.axisLabels,
            legend = [],
            datas = data.series;

        if (datas && datas.length) {
            datas[0].data.map(item => {
                xAxisData.push(item.name);
            });
            datas.map(item => {
                legend.push(item.name);
                series.push({
                    name: item.name,
                    data: item.data,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle'
                })
            });
            this.setState({
                option: {
                    legend: {
                        data: legend
                    },
                    grid: {
                        left: 50
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxisData,
                        axisLabel: {
                            rotate: 60
                        }
                    },
                    yAxis: {
                        name: axisLabels,
                        type: 'value'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#eee'
                            }
                        },
                        formatter: (params) => {
                            let html = `<div style="text-align: left;font-size:12px;padding:0 5px;line-height: 18px">
                            <p style="margin:0;font-weight: bold">${params.length ? params[0].axisValue : ''}</p>`;
                            for (let i = 0; i < params.length; i++) {
                                html += `<p style="margin:0;">
                                ${params[i].seriesName}：${params[i].data.value}例
                            </p>`
                            }
                            html += '</div>'
                            return html
                        }
                    },
                    series: series
                }
            })
        }
    }
    render() {
        return (
            <ReactEcharts option={this.state.option} theme={this.props.scheme}></ReactEcharts>
        );
    }
}

export default GeekLine;
