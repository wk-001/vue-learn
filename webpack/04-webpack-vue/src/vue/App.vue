<template>
    <div>
        <h1 class="title">{{message}}</h1>
        <button @click="btnClick">点击一下</button>
        <cpn></cpn>
    </div>
</template>

<script>

    //导入子组件
    import Cpn from "./Cpn.vue";

    export default {
        name: "App",
        //注册子组件
        components:{
            Cpn
        },
        data(){
            return{
                message:'hello webpack'
            }
        },
        methods:{
            btnClick(){
                console.log('123');
            }
        }
    }
</script>

<style scoped>
    .title{
        color: aqua;
    }
</style>