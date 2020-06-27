<template>
  <div id="app">
    <h1>{{message}}</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addCount">+</button>
    <button @click="subCount">-</button>
    <button @click="addNumber(5)">+5</button>
    <button @click="addNumber(10)">+10</button>
    <button @click="addPerson">添加用户</button>

    <h2>getters相关信息</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.ageFilter(20)}}</h2>

    <h2>state中的内容是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="editInfo">修改信息</button>

    <h2>modules中state的值</h2>
    <h2>{{$store.state.module1.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="updateName">修改名字</button>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>helloVue组件的内容</h2>
    <hello-vuex/>
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
        message:'vuex组件'
      }
    },
    methods:{
      addCount(){
        this.$store.commit('increment')
      },
      subCount(){
        this.$store.commit('decrement')
      },
      addNumber(number){
        /*普通的提交封装，参数称之为负载 payload
        this.$store.commit('addNumber',number)*/

        //将参数封装为对象后提交 vuex中对应方法的参数也是对象
        this.$store.commit({
          type:'addNumber',
          //number:number   属性和参数一样可以简写为：
          number
        })
      },
      addPerson(){
        const aa = {id:4,name:'aa',age:40}
        this.$store.commit('addPerson',aa)
      },
      editInfo(){
        //this.$store.commit('editInfo')    调用mutations中的同步方法
        /*this.$store.dispatch('asyncEditInfo',{    //调用actions中的异步方法
          message:'传递参数',
          success:()=>{
            console.log('方法执行完成');
          }
        })*/

        /**
         * dispatch调用index.js中的asyncEditInfo方法 该方法返回一个promise
         * promise可以调用then方法处理业务
         */
        this.$store
                .dispatch('asyncEditInfo','我是传递的参数')
                .then(res=>{
          console.log('方法执行完成');
          console.log(res);
        })
      },

      updateName(){
        this.$store.commit('updateName','luoji')
      },

      asyncUpdateName(){
        this.$store.dispatch('asyncUpdateName','beihai')
      }
    }
  }
</script>

<style>

</style>
