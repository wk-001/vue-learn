<template>
    <div id="home">
        <!--顶部导航栏-->
        <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>

        <!--better-scroll插件-->
       <bt-scroll class="content"
                  ref="btScroll"
                  :probe-type="3"
                  @scroll="contentScroll"
                  :pull-up-load="true"
                  @pullingUp="loadData"
       >
           <!--首页轮播图-->
           <home-swiper :banners="banners"/>

           <!--推荐位1-->
           <recommend-view :recommends="recommends"/>

           <!--推荐位2-->
           <feature-view/>

           <!--标签选项卡-->
           <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>

           <!--商品列表-->
           <goods-list :goods="showGoods"/>
       </bt-scroll>

        <back-top-btn @click.native="backClick" v-show="showBackBtn"/>   <!--监听组件根元素的原生事件-->
    </div>

</template>

<script>

    /*导入导航栏*/
    import NavBar from "components/common/navbar/NavBar";

    /*导入标签选项卡*/
    import TabControl from "components/content/tabControl/TabControl";

    /*商品列表*/
    import GoodsList from "components/content/goods/GoodsList";

    /*better-scroll*/
    import btScroll from "components/common/scroll/btScroll";

    /*回到顶部按钮*/
    import BackTopBtn from "components/content/backTop/BackTopBtn";

    /*导入home的轮播图子组件*/
    import HomeSwiper from "./subComps/HomeSwiper";

    /*导入home的推荐子组件*/
    import RecommendView from "./subComps/RecommendView";

    /*导入推荐子组件2*/
    import FeatureView from "./subComps/FeatureView";

    /*导入home.js中获取首页数据的方法*/
    import {getHomeMultiData,getHomeGoods} from "network/home";



    export default {
        name: "Home",
        components:{
            BackTopBtn,
            btScroll,
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList
        },
        data(){
          return{
              //存储请求的数据
              result:null,
              banners:[],
              recommends:[],
              //商品数据 流行、新款、精选
              goods:{
                  'pop':{page:0,list:[]},
                  'new':{page:0,list:[]},
                  'sell':{page:0,list:[]}
              },
              currentType:'pop',
              showBackBtn:false
          }
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list;
            }
        },
        created() {     //组件创建完毕后发送请求获取数据
            //请求首页轮播图、推荐位数据
            this.getHomeMultiData()

            //请求流行商品数据
            this.getHomeGoods('pop')
            //请求新款商品数据
            this.getHomeGoods('new')
            //请求精选商品数据
            this.getHomeGoods('sell')
        },
        methods:{

            //---------------------事件监听相关方法-------------------------
            tabClick(index){
                let typeArrays = ['pop','new','sell'];
                this.currentType = typeArrays[index]
            },
            backClick(){
                /*btScroll是ref的值，
                * scrollTo是BTScroll组件封装的better-scroll的方法，指定滚动的x y坐标，500毫秒内完成操作*/
                this.$refs.btScroll.scrollTo(0,0,500)
            },
            contentScroll(position){
                this.showBackBtn = position.y<-1000
            },
            loadData(){     //上拉加载当前类型的数据
                this.getHomeGoods(this.currentType)
            },

            //---------------------网络请求相关方法-------------------------
            //封装发送请求的方法
            getHomeMultiData(){
                getHomeMultiData().then(res=>{
                    this.result = res;
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            getHomeGoods(type){
                //动态获取页码
                const page = this.goods[type].page + 1;
                getHomeGoods(type,page).then(res=>{
                    //解析结果，放入到声明的变量中
                    this.goods[type].list.push(...res.data.data.list)
                    //页码+1
                    this.goods[type].page = page;
                    //this.goods[type].page += 1;
                })
            }
        }
    }
</script>

<style scoped>
    #home{
        padding-top: 44px;      /*空出导航栏位置*/
        height: 100vh;          /*vh：viewPort height 视口高度*/
        position: relative;     /*相对定位*/
    }

    .home-nav{
        background-color: var(--color-tint);

        /*固定导航栏位置*/
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;     /*z轴位置*/
    }

    /*标签选项卡滚动到顶部后不会随着滚动而改变位置*/
    .tab-control{
        position: sticky;
        top: 44px;
        z-index: 9;
    }

    .content{
        overflow: hidden;
        position: absolute;     /*绝对定位*/
        top: 44px;      /*导航栏高度*/
        bottom: 49px;   /*菜单栏高度*/
        left: 0;
        right: 0;
    }

    /*.content{
        height: calc(100% - 93px);  !*动态计算高度 总高度-导航栏高度-菜单栏高度*!
        overflow: hidden;
        margin-top: 44px;
    }*/
</style>