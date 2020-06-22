<template>
  <div class="home">
    <h1>首页</h1>
    <p>首页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      path:'/home/news'
    }
  },
  created(){
    console.log('组件已创建');
    //document.title='首页'
  },
  mounted(){
    console.log('template挂载到dom');
  },
  updated(){
    console.log('页面已刷新');
  },
  components: {
    HelloWorld
  },
  //activated()和deactivated()必须搭配<keep-alive>使用才有效
  activated() {   //当切换到该组件时调用该方法
    this.$router.push(this.path)  //设置跳转到该组件的默认路径
  },
  deactivated() {   //当没有切换到该组件时调用该方法
    console.log('当前页面不是home组件');
  },
  beforeRouteLeave(to,from,next){   //导航离开该组件的对应路由时调用
    console.log(this.$route.path);
    this.path = from.path       //记录离开前的路径并赋值给当前组件的变量
    next()
  }
}
</script>
