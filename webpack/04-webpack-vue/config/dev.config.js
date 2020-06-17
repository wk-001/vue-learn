//存放开发环境单独需要的依赖

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports=webpackMerge(baseConfig, {
    devServer:{
        contentBase:'./dist',
        inline:true
    }
})