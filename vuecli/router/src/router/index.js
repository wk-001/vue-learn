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
    meta:{    //元数据
      title:'首页'
    },
    children:[
      /*{
        path:'',
        redirect:'news'
      },*/
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
    component: About,
    meta:{
      title:'关于'
    },
    beforeEnter:(to,from,next)=>{
      console.log('跳转到关于路由');
    }
  },
  {
    path:'/user/:userId',
    name:'User',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'我的'
    }
  }
]

//创建VueRouter对象
const router = new VueRouter({
  mode: 'history',      //设置默认为history模式
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'    //统一设置<router-link>标签的class名称
})

//全局导航守卫的前置钩子 路由跳转前进行回调
router.beforeEach((to,from,next)=>{
  //从from的route对象跳转到to的route对象，
  // 获取在routes中定义目的地to的route对象的元数据meta中设置的title
  document.title = to.matched[0].meta.title
  next()    //必须调用next方法，否则无法进行下一步操作
})

//全局导航守卫的后置钩子 路由跳转后进行回调，不需要主动调用next方法进行下一步操作
router.afterEach((to,from)=>{
  console.log('路由跳转后进行回调');
})

//导出router对象，传入到Vue实例中
export default router
