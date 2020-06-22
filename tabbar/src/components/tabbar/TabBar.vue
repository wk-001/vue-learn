<template>

    <div id="tab-bar">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>

    #tab-bar{
        display: flex;
        background-color: #f6f6f6;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -1px 1px rgba(100,100,100,.2);   /*阴影 前三个参数是rgb值0-255，第四个参数透明度0-1*/
    }

</style>