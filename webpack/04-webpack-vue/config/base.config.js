//该文件存放公共依赖，即生产和开发环境都需要的依赖

//动态获取项目路径
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')

//导出模块
module.exports={
    entry:'./src/main.js',      //设置要打包的文件
    output:{        //设置打包完成后文件的路径和文件名
        path:path.resolve(__dirname,'../dist'),        //dirname前面是两个下划线"__"
        filename:'bundle.js',
        //publicPath:'dist/'              //涉及到URL的都会在路径前拼接dist
    },
    module: {
        rules: [
            //打包css的loader
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            //less转css的loader
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            //打包文件的loader
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,         //上传文件大小限制，默认8kb
                            //放在img文件夹下，图片名 = 原图片名 + 8位hash值 + 原文件后缀
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            //ES6转ES5的loader
            {
                test: /\.js$/,
                //排除不需要转换的文件夹
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            //vue-loader
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'main.html'        //根据指定模板生成HTML文件
        })
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'        //设置本地的vue文件
        }
    }
}