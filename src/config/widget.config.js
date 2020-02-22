/*
 * @Author: hejp
 * @Date:   13:36
 * @Last Modified by:   hejp
 * @Last Modified time: 13:36
 */
// 图表默认的配置项
const DEFAULT_OPTIONS = {
    // 标题
    title: {
        show: true, // 是否显示
        text: '', // 文本类型
        top: '0',
        left: 'center',
        right: 'auto',
        bottom: 'auto',
        textStyle: {
            // 字体颜色
            color: '#333',
            // 字体大小
            fontSize: 18
        }
    },
    // 图例
    legend: {
        show: true,
        type: 'plain', // 图例类型（plain:普通图例，scroll:可滚动翻页的图例）
        orient: 'horizontal', // vertical,横排还是纵排,
        left: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        data: [],
        icon: 'roundRect', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        textStyle: {
            color: '#333',
            fontSize: 12
        }
    },
    // 直角坐标系
    grid: {
        show: false, // 是否显示直角坐标系网格
        left: '10%',
        bottom: 60,
        right: '10%',
        top: 60,
        borderColor: '#eee' // 边框颜色
    },
    // 提示框组件
    tooltip: {
        show: true,
        formatter: null,
        trigger: 'axis', // axis(数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用),none(什么都不触发),item(坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用)
        axisPointer: {
            type: 'line', // 指示器类型:line,shadow,none,cross
            z: 1,
            lineStyle: {
                color: '#eee',
                type: 'solid' // 线的类型:solid,dashed,dotted,只有type为line时才有作用
            }
        },
        confine: true // 是否将tooltip框限制在图表的区域内
    },
    xAxis: {
        show: true,
        type: 'category', // vaule,category,time,log
        data: [],
        // 坐标轴轴线相关设置
        axisLine: {
            show: true, // 是否显示坐标轴轴线
            lineStyle: {
                color: '#ddd'
            }
        },
        // 坐标轴刻度相关设置
        axisTick: {
            show: true // 是否显示X轴坐标刻度线
        },
        // 坐标轴刻度标签的相关设置
        axisLabel: {
            color: '#999',
            rotate: 0 // X轴名称旋转角度
        },
        boundaryGap: true, // 是否不从0刻度线开始显示数据
        splitLine: {
            show: false, // 是否显示X轴值域分割线
            lineStyle: {
                color: '#eee'
            }
        },
        splitArea: {
            show: false // 是否显示分割区域颜色
        },
        z: 0
    },
    yAsis: {
        show: true, // 是否显示Y轴坐标
        name: null, // 坐标轴单位
        type: 'value', // y轴坐标轴类型
        z: 1,
        data: [],
        // 坐标轴轴线相关设置
        axisLine: {
            show: true, // 是否显示坐标轴轴线
            lineStyle: {
                color: '#ddd'
            }
        },
        // 坐标轴刻度相关设置
        axisTick: {
            show: false // 是否显示X轴坐标刻度线
        },
        // 坐标轴刻度标签的相关设置
        axisLabel: {
            color: '#999',
            rotate: 0 // X轴名称旋转角度
        },
        splitLine: {
            show: true, // 是否显示X轴值域分割线
            lineStyle: {
                color: '#eee'
            }
        },
        splitArea: {
            show: false // 是否显示分割区域颜色
        }
    },
    // 用于区域缩放
    dataZoom: {
        type: 'slider', // 默认类型外部不可控制
        show: false, // 是否显示区域缩放
        start: 0, // 区域缩放开始值
        end: 100, // 区域缩放结束值
        textStyle: {
            color: 'rgba(0,0,0,0)' // 默认不可控制
        },
        callback: null
    }

}


export default {
    defalutOptions: DEFAULT_OPTIONS
}
