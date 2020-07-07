import{ADD_COUNT,ADD_TO_CART} from "./mutations-constant";

export default {
    addCart(context,payload){

        return new Promise((resolve, reject) => {
            //如果payload中的商品存在购物车中，则返回该商品
            let oldProduct = context.state.cartGoods.find(item=>item.id === payload.id)

            if(oldProduct){
                //oldProduct.count += 1       //购物车中商品的数量+1
                context.commit(ADD_COUNT,oldProduct)
                resolve('购物车中商品的数量+1')
            }else{
                //添加新的商品
                payload.count = 1
                context.commit(ADD_TO_CART,payload)
                resolve('购物车中增加新商品')
            }
        })

    }
}