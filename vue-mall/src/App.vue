<template>
  <div id="app">
    <!--
      菜单栏切换时保存原有状态 不会销毁随着组件切换而销毁
      每次点击商品需要获取对应的商品详情，从keepAlive中排除
    -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>

  </div>
</template>

<script>

  import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

  @import "assets/css/base.css";

</style>
