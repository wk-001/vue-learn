//commonjs模块化规范导入
const {add,mul} = require("./mathUtil.js")

console.log(add(1, 2));
console.log(mul(1, 2));

//es6模块化规范导入
import {name} from "./info";

console.log(name);