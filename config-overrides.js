/*
 * @Author: hejp
 * @Date:   15:27
 * @Last Modified by:   hejp
 * @Last Modified time: 15:27
 */
const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 获取路径
const resolve = (dir) => {
    return path.join(__dirname, './', dir)
}
module.exports = function override(config, env) {
    console.log(env);
    if (env === 'production') {
        config.devtool = false;
        config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8919 }));
    }
    // 配置短路径src
    config.resolve.alias = {
        '@src': resolve('src'),
        '@assets': resolve('src\\assets'),
        '@config': resolve('src\\config'),
        '@store': resolve('src\\store'),
        '@util': resolve('src\\util'),
        '@components': resolve('src\\components'),
        '@service': resolve('src\\service'),
        'react-native': 'react-native-web'
    }
    // antd按需加载
    config = injectBabelPlugin([
        'import', {libraryName: 'antd', librarayDirectory: 'es', style: 'css'}
    ], config);
    // 由于antd打包icon是全部都打包下来，这里需要将antd里的icon单独打包出来
    config.module.rules.push({
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        include: [
            require.resolve('@ant-design/icons/lib/dist')
        ]
    });
    // 添加装饰器能力
    config = injectBabelPlugin([
        '@babel/plugin-proposal-decorators', {legacy: true}
    ], config);
    return config
}
