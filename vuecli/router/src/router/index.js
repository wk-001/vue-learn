//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'
import User from "../views/User";*/

//懒加载
const Home = ()=> import ('../views/Home')
const HomeNews = ()=> import ('../views/HomeNews')
const HomeMessage = ()=> import ('../views/HomeMessage')
const User = ()=> import ('../views/User')
const About = ()=> import ('../views/About')
const Profile = ()=> import ('../views/Profile')

//通过Vue.use(插件) 安装插件
Vue.use(VueRouter)

  //配置路由和组件之间的应用关系
  const routes = [
    {
      path:'',
      redirect:'/home'    //重定向到home
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',    //路径前面不能加斜杠
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/user/:userId',
    name:'User',
    component:User
  },
  {
    path:'/profile',
    component:Profile
  }
]

//创建VueRouter对象
const router = new VueRouter({
  mode: 'history',      //设置默认为history模式
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'    //统一设置<router-link>标签的class名称
})

//导出router对象，传入到Vue实例中
export default router
