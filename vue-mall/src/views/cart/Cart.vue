<template>
    <div class="cart">
        <nav-bar class="navBar">
            <div slot="center">购物车（{{cartLength}}）</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Cart",
        components: {
            NavBar
        },
        computed:{
            cartLength(){
                return this.$store.state.cartGoods.length
            }
        }
    }
</script>

<style scoped>
    .navBar{
        background-color: var(--color-tint);
        color: #fff;
    }
</style>