<template>
    <div>
        <h1>用户模块</h1>
        <p>用户模块内容</p>
        <p>{{userId}}</p>
        <p>{{$route.params.userId}}</p>
    </div>
</template>

<script>
    export default {
        name: "User",
        created(){
            console.log('组件已创建');
            //document.title='用户'
        },
        computed:{      /*获取路径中的变量*/
            userId(){
                return this.$route.params.userId;
            }
        }
    }
</script>

<style scoped>

</style>