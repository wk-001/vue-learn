<template>
  <div id="app">
    <h1>{{message}}</h1>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>

    <hello-vuex :counter="counter"/>
  </div>
</template>

<script>

  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    components:{
      HelloVuex
    },
    data(){
      return{
        message:'vuex组件',
        counter:0
      }
    }
  }
</script>

<style>

</style>
