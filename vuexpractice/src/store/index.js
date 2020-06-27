import Vue from 'vue'
import Vuex from 'vuex'   //导入vuex

//安装插件
Vue.use(Vuex)

const module1 = {
  state:{
    name:'lisi'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    asyncUpdateName(context,payload){
      setTimeout(()=>{
        context.commit('updateName',payload);
      },1000)
    }
  },
  getters:{
    fullName(state){  //对本组件中state中的值进行处理
      return state.name + "123"
    },
    fullName2(state,getters){   //getters是本组件中的getters对象，可以获取getters中的方法
      return getters.fullName+'456'
    },
    fullName3(state,getters,rootState){   //rootState是根组件中的state对象
      return getters.fullName2+rootState.counter
    }
  }
}

const store = new Vuex.Store({
  //相当于组件中的data，可以在其他页面共享其中定义的属性
  state: {
    counter:100,
    person:[
      {id:1,name:'tom',age:10},
      {id:2,name:'jerry',age:20},
      {id:3,name:'john',age:30}
    ],
    /**
     * 在state中声明的属性会被加入到vue的响应式系统中，
     * 响应式系统会监听属性的变化，当属性发生变化时，会通知所有用到该属性的页面刷新
     */
    info:{
      name:'ash',
      age:20,
      height:1.8
    }
  },
  mutations: {    //相当于组件中的methods 定义方法修改state中的属性
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    addNumber(state,number){
      /*参数普通封装
      state.counter += number;*/

      //参数封装为对象
      state.counter += number.number
    },
    addPerson(state,aa){
      state.person.push(aa)
    },
    editInfo(state){
      state.info.name='aaa'   //name属性已经被加入到Vue响应式系统中，name发生改变，页面中的值会跟着改变
      //state.info.address='bj'    //address属性没有加入到Vue响应式系统中，即使发生改变，页面中的值也不会改变

      //Vue.set(要修改的对象，数组下标|对象属性，要修改的值)
      //Vue.set(state.info,'address','bj')    //set方法可以将新增的对象属性添加到响应式系统中

      //响应式删除对象中的属性
      //Vue.delete(state.info,'age')
    }
  },
  actions: {    //相当于组件的异步methods

    asyncEditInfo(context,payload){
      /*setTimeout(()=>{
        context.commit('editInfo')    //在异步操作代码块中调用同步方法
        console.log(payload.message);
        payload.success()
      },1000)*/

      //then方法在App.vue对应的方法后
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('editInfo')    //在异步操作代码块中调用同步方法
          console.log(payload);
          resolve('promise方法的参数')
        },1000)
      })
    }

  },
  getters:{   //相当于组件的计算属性computed
    powerCounter(state){
      return state.counter * state.counter
    },
    ageFilter(state){
      return age=>{
        return state.person.filter(p=> p.age>age)
      }
    }
  },
  modules: {
    module1
  }
})

//导出store对象
export default store
