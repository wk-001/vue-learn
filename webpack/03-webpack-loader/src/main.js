//commonjs模块化规范导入
const {add,mul} = require("./js/mathUtil.js")

console.log(add(1, 2));
console.log(mul(1, 2));

//es6模块化规范导入
import {name} from "./js/info";

console.log(name);

//依赖CSS文件 只有被依赖的文件才可以打包
require('./css/normal.css')
