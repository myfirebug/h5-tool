/*
 * @Author: hejp
 * @Date:   16:26
 * @Last Modified by:   hejp
 * @Last Modified time: 16:26
 */
import Ajax from '@service';
import {message} from 'antd';
const initialState = {
    // 是否跳转到登录
    isLogin: false,
    edit: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        // 登录
        case 'login':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

/**
 * 登录
 * @param data
 * @returns {Function}
 */
export function login (data) {
    return (dispatch) => {
        dispatch({ type: 'login', data:data })
    }
}
