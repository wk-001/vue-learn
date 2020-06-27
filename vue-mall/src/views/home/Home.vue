<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>

        <home-swiper :banners="banners"/>

        <recommend-view :recommends="recommends"/>
    </div>
</template>

<script>

    /*导入导航栏*/
    import NavBar from "components/common/navbar/NavBar";

    /*导入home.js中获取首页数据的方法*/
    import {getHomeMultiData} from "network/home";

    /*导入home的轮播图子组件*/
    import HomeSwiper from "./subComps/HomeSwiper";

    /*导入home的推荐子组件*/
    import RecommendView from "./subComps/RecommendView";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView
        },
        data(){
          return{
              //存储请求的数据
              result:null,
              banners:[],
              recommends:[]
          }
        },
        created() {     //组件创建完毕后发送请求获取数据
            //请求多个数据
            getHomeMultiData().then(res=>{
                this.result = res;
                this.banners = res.data.data.banner.list
                this.recommends = res.data.data.recommend.list
            })
        }
    }
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
    }
</style>