/*
 * @Author: hejp
 * @Date:   13:32
 * @Last Modified by:   hejp
 * @Last Modified time: 13:32
 */
import theme from '../theme'
const initialState = {
    // 菜单
    list: [
        {
            checked: false,
            name: '图表',
            icon: '&#xe708;',
            data: [
                {
                    show: true,
                    checked: false,
                    type: 'line',
                    name: '折线图',
                    image: 'http://widget.daqsoft.com/widget/widgets-files/20190904215932-1521/1AS6Z33794504//images/thumbnail.png',
                    component: 'GeekLine',
                    api: '',
                    config: {}
                }
            ]
        },
        {
            checked: false,
            name: '表格',
            icon: '&#xe609;',
            data: [
                {
                    show: true,
                    checked: false,
                    type: 'table',
                    name: '表格',
                    image: 'http://widget.daqsoft.com/widget/widgets-files/20190904215932-1521/1AS6Z33794504//images/thumbnail.png',
                    component: 'GeekLine',
                    api: '',
                    config: {}
                }
            ]
        },
        {
            checked: false,
            name: '区域',
            icon: '&#xe604;',
            data: [
                {
                    show: true,
                    checked: false,
                    type: 'blocks',
                    name: '区域',
                    image: 'http://widget.daqsoft.com/widget/widgets-files/20190904215932-1521/1AS6Z33794504//images/thumbnail.png',
                    component: 'GeekLine',
                    api: '',
                    config: {}
                }
            ]
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        // 获取所有菜单
        case 'getWidgets':
            return {
                ...state,
                list: [...action.data]
            }
        default:
            return state
    }
}

/**
 * 获取所有的菜单
 * @param data
 * @returns {Function}
 */
export function getWidgets (data) {
    return (dispatch) => {
        dispatch({ type: 'getWidgets', data:data })
    }
}
