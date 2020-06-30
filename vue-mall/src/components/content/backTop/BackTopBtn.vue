<!--回到顶部按钮-->
<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png">
    </div>
</template>

<script>
    export default {
        name: "BackTopBtn"
    }
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 3px;
        bottom: 50px;
    }

    .back-top img{
        width: 55px;
        height: 55px;
    }
</style>