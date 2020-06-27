//封装request请求模块

import Axios from "axios";

export function request(config) {

    //创建axios实例 返回一个promise
    const instance = Axios.create({
        baseURL:'http://127.0.0.1:8081',
        timeout:5000
    })

    //axios请求拦截器
    instance.interceptors.request.use(config=>{

        console.log(config);
        return config;      //拦截请求处理完成之后要放行请求
    },error => {        //发送失败进入error
        console.log(error);
    })
    //axios响应拦截器
    instance.interceptors.response.use(res=>{
        //处理结果
        console.log(res.data);
        return res;         //拦截响应处理完成之后要放行
    },error => {
        console.log(error);
    })

    //发送网络请求
    return instance(config)

}
/*
export function request(config) {

    return new Promise((resolve,reject)=>{
        //创建axios实例
        const instance = Axios.create({
            baseURL:'http://127.0.0.1:8081',
            timeout:5000
        })

        //发送网络请求
        instance(config).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })

}
*/

/*export function request(config,success,failure) {
    //创建axios实例
    const instance = Axios.create({
        baseURL:'http://127.0.0.1:8081',
        timeout:5000
    })

    //发送网络请求
    instance(config).then(res=>{
        success(res)
    }).catch(err=>{
        failure(err)
    })
}*/

