//导入其他模块的对象
import {flag,sum} from "./a.js";

if (flag){
    console.log('111');
    sum(1,2)
}

import {mul,User} from "./a.js";

console.log(mul(2, 5));
const u = new User();
u.run();

//导入export default的内容时不需要加"{}"
import aaa from "./a.js";

console.log(aaa);
