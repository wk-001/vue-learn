<template>
  <div id="app">
    <!--菜单栏切换时保存原有状态 不会销毁随着组件切换而销毁-->
    <keep-alive>
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
