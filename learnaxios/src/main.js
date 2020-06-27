import Vue from 'vue'
import App from './App.vue'

//导入axios
import Axios from "axios";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Axios({
  url:'http://127.0.0.1:8081/user/selectAll',
  //method:'post'
  params:{
    id:1,
    name:'tom'
  }
}).then(res=>{
  console.log(res);
})

//公共配置根路径
Axios.defaults.baseURL='http://127.0.0.1:8081'
Axios.defaults.timeout= 5000    //超时时间 单位/毫秒

//axios发送并发请求
Axios.all([Axios({
  url:'/user/selectAll'
}),Axios({
  url:'/user/selectOne',
  params:{
    id:1,
    name:'tom'
  }
})]).then(res=>{
  //以上两个网络请求都完成后会执行then块中的代码，对象数据进行统一处理
  console.log(res[0]);
  console.log(res[1]);
}).then(Axios.spread((res1,res2)=>{ //两个then选择一个使用
  console.log(res1);
  console.log(res2);
}))

//axios实例
const instance1 = Axios.create({
  baseURL:'http://127.0.0.1:8081',
  timeout:5000
})

instance1({
  url:'user/selectAll'
}).then(res=>{
  console.log(res);
})

instance1({
  url:'/user/selectOne',
  params:{
    id:1,
    name:'tom'
  }
}).then(res=>{
  console.log(res);
})

const instance2 = Axios.create({
  baseURL:'http://127.0.0.1:8082',
  timeout:5000,
  headers:{

  }
})

//封装request模块
//导入模块
import {request} from "./network/request";

request({
  url:'user/selectAll'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

/*
request({
  url:'/user/list'
},res=>{    //成功回调函数
  console.log(res);
})*/
