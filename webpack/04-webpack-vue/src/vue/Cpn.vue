<template>
    <div>
        <h1>cpn组件标题</h1>
        <p>cpn组件内容</p>
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                name:'cpn组件的name'
            }
        }
    }
</script>

<style scoped>

</style>