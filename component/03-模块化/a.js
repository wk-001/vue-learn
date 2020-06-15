let name = 'tom'
let age = '22'
let flag = true

function sum(num1, num2) {
    console.log(num1 + num2);
    return num1+num2;
}

if (flag){
    sum(10,20)
}

//导出方式一：导出对象，对象中的内容是其他模块需要的本模块属性和方法
export {
    flag,sum
}

//导出方式二
export let num1 = 10;
export let num2 = 20;

//导出函数 / 类
export function mul(num1, num2) {
    return num1 * num2;
}

export class User {
    run(){
        console.log('run');
    }
}

//export default 导出一个属性/函数/类，其他模块导入时可以用任意名称接收，一个模块只能存在一个
const test = 'aaa';
export default test;


