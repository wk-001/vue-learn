<template>
    <div>
        <h1>Profile组件</h1>
        <p>{{$route.query}}</p>     <!--获取传递的对象-->
        <p>{{$route.query.name}}</p>    <!--获取对象中的单个值-->
        <p>{{$route.query.age}}</p>
        <p>{{$route.query.gender}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        created(){
            console.log('组件已创建');
            //document.title='个人中心'
        }
    }
</script>

<style scoped>

</style>