<template>
    <div class="cart-list">
        <bt-scroll class="content" :probe-type="2" ref="scroll">
            <cart-item-list v-for="(item,index) in cartGoods"
                            :item-info="item"
                            :key="index"/>
        </bt-scroll>
    </div>
</template>

<script>
    import BtScroll from "components/common/scroll/btScroll";
    import CartItemList from "./CartItemList";

    export default {
        name: "CartList",
        components: {CartItemList, BtScroll},
        computed:{
            cartGoods(){
                return this.$store.state.cartGoods
            }
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .cart-list{
        height: calc(100% - 44px - 49px - 40px);
    }

    /*设置scroll高度 100%高度-导航栏高度 - 底部菜单栏高度*/
    .content{
        height: 100%;
        overflow: hidden;
    }
</style>