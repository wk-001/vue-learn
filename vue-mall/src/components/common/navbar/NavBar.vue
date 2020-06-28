<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;          /*flex布局*/
        line-height: 44px;      /*高度*/
        height: 44px;      /*高度*/
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.2);   /*阴影 前三个参数是rgb值0-255，第四个参数透明度0-1*/
    }

    .left,.right{   /*左右插槽各占60像素*/
        width: 60px;
    }

    .center{
        flex: 1;        /*占据剩余部分*/
    }
</style>