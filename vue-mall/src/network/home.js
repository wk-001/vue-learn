//导入请求模块
import {request} from "./request";

//封装首页的所有请求，统一管理，减少耦合

//获取首页的数据
export function getHomeMultiData() {
    return request({
        url:'/home/multidata'
    })
}