/*
 * @Author: hejp
 * @Date:   13:32
 * @Last Modified by:   hejp
 * @Last Modified time: 13:32
 */
import theme from '../theme'
const initialState = {
    // 主题的名称
    name: 'walden'
}
// 默认注册的echarts主题
let obj = theme.walden;
window.echarts.registerTheme('walden', obj);

export default (state = initialState, action) => {
    switch (action.type) {
        // 注册主题
        case 'registerTheme':
            if (theme[action.data]) {
                let obj = theme[action.data];
                window.echarts.registerTheme(action.data, obj);
            }
            return {
                ...state,
                name: action.data
            }
        default:
            return state
    }
}

/**
 * 注册主题
 * @param data
 * @returns {Function}
 */
export function registerTheme (data) {
    return (dispatch) => {
        dispatch({ type: 'registerTheme', data:data })
    }
}
