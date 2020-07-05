import{ADD_COUNT,ADD_TO_CART} from "./mutations-constant";

export default {
    [ADD_COUNT](state,payload){
        payload.count++
    },
    [ADD_TO_CART](state,payload){
        state.cartGoods.push(payload)
    }

}