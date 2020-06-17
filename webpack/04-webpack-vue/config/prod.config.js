//存放生产环单独境需要的依赖
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports=webpackMerge(baseConfig, {
    plugins: [
        new UglifyJsWebpackPlugin()
    ]
})