import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要路由的组件
const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
const Cart=()=>import('../views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')

//安装插件
Vue.use(VueRouter)

//配置路由和组件之间的关系
const routes = [
  {
    path:"",      //默认路由
    redirect: "/home"   //重定向到home路由
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  },
]

//创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

//导出router
export default router
