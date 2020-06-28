<template>
    <div id="home">
        <!--顶部导航栏-->
        <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>

        <!--首页轮播图-->
        <home-swiper :banners="banners"/>

        <!--推荐位1-->
        <recommend-view :recommends="recommends"/>

        <!--推荐位2-->
        <feature-view/>

        <!--标签选项卡-->
        <tab-control class="tab-control" :titles="['流行','新款','精选']"/>

        <ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
            <li>list4</li>
            <li>list5</li>
            <li>list6</li>
            <li>list7</li>
            <li>list8</li>
            <li>list9</li>
            <li>list10</li>
            <li>list11</li>
            <li>list12</li>
            <li>list13</li>
            <li>list14</li>
            <li>list15</li>
            <li>list16</li>
            <li>list17</li>
            <li>list18</li>
            <li>list19</li>
            <li>list20</li>
            <li>list21</li>
            <li>list22</li>
            <li>list23</li>
            <li>list24</li>
            <li>list25</li>
            <li>list26</li>
            <li>list27</li>
            <li>list28</li>
            <li>list29</li>
            <li>list30</li>
            <li>list31</li>
            <li>list32</li>
            <li>list33</li>
            <li>list34</li>
            <li>list35</li>
            <li>list36</li>
            <li>list37</li>
            <li>list38</li>
            <li>list39</li>
            <li>list40</li>
            <li>list41</li>
            <li>list42</li>
            <li>list43</li>
            <li>list44</li>
            <li>list45</li>
            <li>list46</li>
            <li>list47</li>
            <li>list48</li>
            <li>list49</li>
            <li>list50</li>
        </ul>

    </div>

</template>

<script>

    /*导入导航栏*/
    import NavBar from "components/common/navbar/NavBar";

    /*导入标签选项卡*/
    import TabControl from "components/content/tabControl/TabControl";

    /*导入home.js中获取首页数据的方法*/
    import {getHomeMultiData,getHomeGoods} from "network/home";

    /*导入home的轮播图子组件*/
    import HomeSwiper from "./subComps/HomeSwiper";

    /*导入home的推荐子组件*/
    import RecommendView from "./subComps/RecommendView";

    /*导入推荐子组件2*/
    import FeatureView from "./subComps/FeatureView";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl
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
                  'select':{page:0,list:[]}
              }
          }
        },
        created() {     //组件创建完毕后发送请求获取数据
            //请求首页轮播图、推荐位数据
            this.getHomeMultiData()

            //请求流行、新款、精选商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods:{
            //封装发送请求的方法
            getHomeMultiData(){
                getHomeMultiData().then(res=>{
                    this.result = res;
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            getHomeGoods(type){
                getHomeGoods(type,1).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
    #home{
        padding-top: 44px;      /*空出导航栏位置*/
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
    }
</style>