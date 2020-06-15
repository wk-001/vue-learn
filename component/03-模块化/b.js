let name = 'jerry'
let age = '23'
let flag = false

import {num1,num2} from "./a.js";

console.log(num1);
console.log(num2);

//导入a.js文件中的所有内容，相当于将a.js文件中的所有内容放到对象a中，使用时通过a调用
import * as a from "./a.js";

console.log(a.mul(a.num1,a.num2));
