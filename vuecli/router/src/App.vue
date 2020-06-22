<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" active-class="active" replace>Home</router-link> |
      <router-link to="/about" active-class="active" replace>About</router-link> |
      <!--<button @click="toHome">首页</button>
      <button @click="toAbout">关于</button>-->
      <router-link :to="'/user/'+userId">用户</router-link> |
      <router-link :to="{path:'/profile',query:{name:'tom',age:22,gender:'male'}}">档案</router-link> |

      <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button>

    </div>
    <keep-alive exclude="User">
      <router-view/>  <!--routerview的位置会影响页面显示位置-->
    </keep-alive>
  </div>
</template>

<script>

  export default {
    name:'App',
    data(){
      return{
        userId:'jerry'
      }
    },
    methods:{
      toHome(){
        this.$router.push("/home")
      },
      toAbout(){
        this.$router.push("/about")
      },
      userClick(){
        this.$router.push('/user/'+this.userId)
      },
      profileClick(){
        this.$router.push({
          path:'/profile',
          query:{
            name:'jerry',
            age:23,
            gender:'male'
          }
        })
      }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*选中的routing link会显示对应的颜色*/
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
