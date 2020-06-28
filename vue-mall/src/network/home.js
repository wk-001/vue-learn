//导入请求模块
import {request} from "./request";

//封装首页的所有请求，统一管理，减少耦合

//获取首页的轮播图、推荐位数据
export function getHomeMultiData() {
    return request({
        url:'/home/multidata'
    })
}

//获取商品数据
export function getHomeGoods(type,page) {
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}