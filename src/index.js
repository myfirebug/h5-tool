import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './store/index'
import {Provider} from 'react-redux'
import App from './App'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { ConfigProvider } from 'antd'
import '@assets/scss/reset.scss'

let persistor = persistStore(store)

ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider locale={zh_CN}>
                <App/>
            </ConfigProvider>
        </PersistGate>
    </Provider>
), document.getElementById('root'));
