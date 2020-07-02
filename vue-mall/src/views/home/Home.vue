<template>
    <div id="home">
        <!--顶部导航栏-->
        <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>

        <!--标签选项卡-->
        <tab-control class="tab-control"
                     :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl1"
                     v-show="isTabFixed"
        />

        <!--better-scroll插件
            ref：绑定引用，可以精确地引用该组件
            :probe-type：滚动监听类型：2监听手指滑动；3监听所有的滑动
            @scroll：BTScroll组件发送的事件和坐标信息，指向的方法可以将坐标信息做为参数，
                用于判断是否显示到达顶部的按钮
            :pull-up-load：是否监听上拉事件
            @pullingUp：BTScroll组件发送的事件，没有参数，监听到事件就会执行指定方法
                用于监听用户的上拉动作后加载数据
        -->
       <bt-scroll class="content"
                  ref="btScroll"
                  :probe-type="2"
                  @scroll="contentScroll"
                  :pull-up-load="true"
                  @pullingUp="loadData"
       >
           <!--首页轮播图-->
           <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>

           <!--推荐位1-->
           <recommend-view :recommends="recommends"/>

           <!--推荐位2 一张可以点击的图片-->
           <feature-view/>

           <!--标签选项卡-->
           <tab-control :titles="['流行','新款','精选']"
                        @tabClick="tabClick"
                        ref="tabControl2"
           />

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

    /*导入工具类的防抖函数*/
    import {debounce} from "components/common/utils/util";

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
              //默认商品类型
              currentType:'pop',
              //默认不显示回到顶部按钮
              showBackBtn:false,
              //标签选项卡上方元素的高度
              tabOffsetTop:0,
              //默认吸顶效果
              isTabFixed:false,
              //记录当前位置
              saveY:0
          }
        },
        activated() {
            //跳转到离开时的位置
            this.$refs.btScroll.scrollTo(0,this.saveY,0)

            //刷新坐标
            this.$refs.btScroll.refresh()
        },
        deactivated() {
            //保存离开时的位置 获取BTScroll引用组件中scroll属性的y轴坐标
            this.saveY = this.$refs.btScroll.scroll.y
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
        mounted() {

            //防抖函数
           const refresh =  debounce(this.$refs.btScroll.refresh,500)

            //监听item组件图片加载状态
            this.$bus.$on('itemImgLoad',()=>{
                //mouted中保证this.$refs.btScroll是有值的
                //this.$refs.btScroll.refresh();
                refresh();
            })

        },
        methods:{

            //---------------------事件监听相关方法-------------------------
            tabClick(index){
                let typeArrays = ['pop','new','sell'];
                this.currentType = typeArrays[index]

                /*解决两个标签选项卡不一致的问题*/
                this.$refs.tabControl1.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            backClick(){
                /*btScroll是ref的值，
                * scrollTo是BTScroll组件封装的better-scroll的方法，指定滚动的x y坐标，500毫秒内完成操作*/
                this.$refs.btScroll.scrollTo(0,0,500)
            },
            contentScroll(position){
                //判断回到顶部的按钮是否显示
                this.showBackBtn = position.y<-1000

                //判断标签选项卡tabControl是否有吸顶效果
                this.isTabFixed = position.y < -this.tabOffsetTop
            },
            loadData(){     //上拉加载当前类型的数据 currentType记录当前选中的类型
                this.getHomeGoods(this.currentType)
            },
            swiperImgLoad(){
                /*获取TabControl的OffsetTop
                 * 所有的组件都有一个属性"$el"，用于获取组件中的元素*/
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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

                /*network/home.js中发送的请求*/
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
        /*padding-top: 44px;      空出导航栏位置*/
        height: 100vh;          /*vh：viewPort height 视口高度*/
        position: relative;     /*相对定位*/
    }

    .home-nav{
        background-color: var(--color-tint);

        /*使用浏览器原生滚动固定导航栏位置*/
        /*position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */    /*z轴位置*/
    }

    /*标签选项卡滚动到顶部后不会随着滚动而改变位置*/
    .tab-control{
        position: relative;
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