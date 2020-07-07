<template>
    <div class="cart">
        <!--顶部导航-->
        <nav-bar class="navBar">
            <div slot="center">购物车（{{cartList.length}}）</div>
        </nav-bar>

        <!--购物车商品列表-->
        <cart-list class="cart-list"/>

        <!--购物车商品结算-->
        <cart-bottom-bar/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import CartList from "./subComponent/CartList";
    import CartBottomBar from "./subComponent/CartBottomBar";

    //映射getters.js中声明的计算属性
    import {mapGetters} from 'vuex'
    export default {
        name: "Cart",
        components: {
            CartBottomBar,
            CartList,
            NavBar
        },
        computed:{
            /*cartLength(){
                return this.$store.state.cartGoods.length
            }*/
            ...mapGetters(['cartList'])
        }
    }
</script>

<style scoped>
    .cart{
        height: 100vh;
    }

    .navBar{
        position: relative;
        background-color: var(--color-tint);
        color: #fff;
    }

    .cart-list {
        top: 44px;
        bottom: 49px;
        width: 100%;
    }

</style>