import { createStore, applyMiddleware, combineReducers } from 'redux'
// 数据持久化工具
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// 用户模块
import user from './user.redux'
// 页面模块
import page from './page.redux'
// 主题模块
import scheme from './scheme.redux'
let NODE_ENV = process.env.NODE_ENV,
    applyMiddlewareArray = NODE_ENV === 'development'
        ? applyMiddleware(logger, thunk)
        : applyMiddleware(thunk);
// 配置
const persistConfig = {
    // 存储的名称
    key: 'root',
    // 存储方式
    storage: storage,
    // 某个reducer,不持久化
    // blacklist: ['counter'],
    // 需要持久化的模块
    // whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user,
    page,
    scheme
}));

export default createStore(persistedReducer, applyMiddlewareArray);
