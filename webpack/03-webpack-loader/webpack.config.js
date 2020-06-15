//动态获取项目路径
const path = require('path')

//配置默认打包的js文件和打包完成的文件路径及文件名
module.exports={
    entry:'./src/main.js',      //设置要打包的文件
    output:{        //设置打包完成后文件的路径和文件名
        path:path.resolve(__dirname,'dist'),        //dirname前面是两个下划线"__"
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }
}