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
                    component: 'GeekLine',
                    api: '',
                    config: {}
                },
                {
                    name: '折线图',
                    checked: true,
                    component: 'GeekLine',
                    api: '',
                    config: {}
                },
                {
                    name: '折线图',
                    checked: true,
                    component: 'GeekLine',
                    api: '',
                    config: {}
                }
            ]
        },
        {
            checked: false,
            name: '第2页',
            widgets: []
        }
    ],
    // 选中页面的下标
    checkedPageIndex: 0
}

export default (state = initialState, action) => {
    let pages = state.pages;
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
        // 复制页面
        case 'copyPage':
            pages.splice(state.checkedPageIndex, 0, {
                ...pages[state.checkedPageIndex],
                checked: false
            })
            return {
                ...state,
                pages: [...pages]
            }
        // 删除页面
        case 'deletePage':
            pages.splice(state.checkedPageIndex, 1);
            if (pages.length) {
                pages[0].checked = true
            }
            return {
                ...state,
                checkedPageIndex: 0,
                pages: [...pages]
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

/**
 * 复制页面
 * @param data
 * @returns {Function}
 */
export function copyPage () {
    return (dispatch) => {
        dispatch({ type: 'copyPage'})
    }
}

/**
 * 删除页面
 * @param data
 * @returns {Function}
 */
export function deletePage () {
    return (dispatch) => {
        dispatch({ type: 'deletePage'})
    }
}
