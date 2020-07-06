import{ADD_COUNT,ADD_TO_CART} from "./mutations-constant";

export default {
    [ADD_COUNT](state,payload){     //购物车中已存在的商品数量+1
        payload.count++
    },
    [ADD_TO_CART](state,payload){
        payload.selected=true       //添加到购物车中的商品默认选中
        state.cartGoods.push(payload)
    }
}