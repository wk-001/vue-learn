//commonjs模块化规范导入
const {add,mul} = require("./js/mathUtil.js")

console.log(add(1, 2));
console.log(mul(1, 2));

//es6模块化规范导入
import {name} from "./js/info";

console.log(name);

//依赖CSS文件 只有被依赖的文件才可以打包
require('./css/normal.css')

//依赖less文件
require('./css/special.less')

//使用Vue开发
import Vue from 'vue'

//引入template 导入export default的文件不需要加"{}"
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template: '<App/>',     //使用组件
    components:{            //注册组件
        App
    }
})
