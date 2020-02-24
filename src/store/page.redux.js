/*
 * @Author: hejp
 * @Date:   13:32
 * @Last Modified by:   hejp
 * @Last Modified time: 13:32
 */
const initialState = {
    // 所有页面属性
    pages: [
        {
            checked: true,
            name: '第1页',
            widgets: [
                {
                    name: '折线图',
                    checked: true,
                    component: 'ReactLine',
                    api: '',
                    options: {},
                    config: {}
                }
            ]
        },
        {
            checked: false,
            name: '第2页',
            widgets: [
                {
                    name: '柱状图',
                    checked: true,
                    component: 'ReactLine'
                }
            ]
        }
    ],
    // 选中页面的下标
    checkedPageIndex: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        // 所有页面
        case 'getPages':
            return {
                ...state,
                pages: [...action.data]
            }
        // 选中页面
        case 'checkedPageIndex':
            return {
                ...state,
                checkedPageIndex: action.data
            }
        default:
            return state
    }
}

/**
 * 获取页面数据
 * @param data
 * @returns {Function}
 */
export function getPages (data) {
    return (dispatch) => {
        dispatch({ type: 'getPages', data:data })
    }
}

/**
 * 选中页面的下标
 * @param data
 * @returns {Function}
 */
export function checkedPageIndex (data) {
    return (dispatch) => {
        dispatch({ type: 'checkedPageIndex', data:data })
    }
}
