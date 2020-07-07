<!--购物车商品选中效果-->
<template>
    <div class="check-button" :class="{selected:isSelected}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "SelectedGoods",
        props:{
            isSelected:{
                type:Boolean,
                default:true
            }
        }
    }
</script>

<style scoped>
    .check-button{
        border-radius: 50%;
        border: 2px solid #aaa;
    }

    .selected{
        background-color: red;
        border-color: red;
    }
</style>