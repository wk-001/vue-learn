<template>
  <div id="app">

    <router-view></router-view>

    <main-tab-bar/>

  </div>
</template>

<script>

  //导入组件
  import MainTabBar from "./components/tabbar/MainTabBar";

  export default {
    name:'App',
    components:{
      MainTabBar
    }
  }
</script>

<style>

  @import "./assets/css/base.css";    /*引入css样式*/

</style>
