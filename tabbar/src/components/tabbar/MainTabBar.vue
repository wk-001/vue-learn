<template>

    <tab-bar>

        <tab-bar-item path="/home" activeColor="red">
            <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>

        <tab-bar-item path="/category" activeColor="green">
            <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/category-active.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>

        <tab-bar-item path="/cart" activeColor="purple">
            <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/cart-active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>

        <tab-bar-item path="/profile" activeColor="orange">
            <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/profile-active.svg" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>

    </tab-bar>

</template>

<script>

    //导入组件
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>