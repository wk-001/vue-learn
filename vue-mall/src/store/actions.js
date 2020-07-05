import{ADD_COUNT,ADD_TO_CART} from "./mutations-constant";

export default {
    addCart(context,payload){

        let oldProduct = null;
        //遍历购物车集合，如果新添加到购物车的内容已经存在于购物车中 则修改购物车中商品的数量
        /*for (let item of state.cartGoods) {
            if(item.id === payload.id){
                oldProduct = item
            }
        }*/

        //如果payload中的商品存在购物车中，则返回该商品
        oldProduct = context.state.cartGoods.find(item=>item.id === payload.id)

        if(oldProduct){
            //oldProduct.count += 1       //修改购物车中商品的数量
            context.commit(ADD_COUNT,oldProduct)
        }else{
            payload.count = 1
            context.commit(ADD_TO_CART,payload)
        }

    }
}