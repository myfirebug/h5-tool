import { createStore, applyMiddleware, combineReducers } from 'redux'
// 数据持久化工具
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import user from './user.redux'
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
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user
}));

export default createStore(persistedReducer, applyMiddlewareArray);
