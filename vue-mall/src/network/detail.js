//导入请求模块
import {request} from "./request";

//根据商品ID请求商品详情
export function getDetail(iid) {
    return request({
        url:'/detail',
        params:{    //参数
            iid
        }
    })
}
//将服务器中获取到的数据封装成一个类再导出
//商品信息
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.nowPrice = itemInfo.highNowPrice;
        this.columns = columns;
        this.services = services;
    }
}

/*商品参数*/
export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}

/*店铺信息*/
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}
