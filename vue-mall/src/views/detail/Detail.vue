<template>
    <div id="detail">
        <!--导航栏-->
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>

        <bt-scroll class="content" :probe-type="2" ref="scroll" @scroll="contentScroll">

            <!--详情图片轮播图-->
            <detail-swipers :top-imgs="topImgs"/>

            <!--商品详情-->
            <detail-base-info :goods="goods"/>

            <!--店铺信息-->
            <detail-shop-infos :shop="shop"/>

            <!--商品详情信息-->
            <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>

            <!--商品参数-->
            <detail-param-info ref="param" :paramInfo="goodsParam"/>

            <!--评论-->
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>

            <!--推荐商品-->
            <goods-list ref="recommend" :goods="recommends"/>

        </bt-scroll>

        <!--底部菜单-->
        <detail-bottom-bar @addCart="addCart"/>

        <!--回到顶部按钮-->
        <back-top-btn @click.native="backClick" v-show="showBackBtn"/>   <!--监听组件根元素的原生事件-->

    </div>
</template>

<script>

    //导航栏
    import DetailNavBar from "./subComponent/DetailNavBar";

    //发送请求获取商品详情
    import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";

    //详情图片轮播图
    import DetailSwipers from "./subComponent/DetailSwipers";

    //商品详情
    import DetailBaseInfo from "./subComponent/DetailBaseInfo";

    //店铺信息
    import DetailShopInfos from "./subComponent/DetailShopInfo";

    //better-scroll
    import btScroll from "components/common/scroll/btScroll";

    //商品详情信息
    import DetailGoodsInfo from "./subComponent/DetailGoodsInfo";

    //商品参数
    import DetailParamInfo from "./subComponent/DetailParamInfo";

    //评论
    import DetailCommentInfo from "./subComponent/DetailCommentInfo";

    //底部菜单
    import DetailBottomBar from "./subComponent/DetailBottomBar";

    //推荐商品
    import GoodsList from "components/content/goods/GoodsList";

    /*导入工具类的防抖函数*/
    import {debounce} from "components/common/utils/util";

    //导入声明的混入方法
    import {backTopMixin} from "components/common/utils/mixin";

    export default {
        name: "Detail",
        components:{
            DetailBottomBar,
            GoodsList,
            DetailCommentInfo,
            DetailParamInfo,
            DetailGoodsInfo,
            btScroll,
            DetailShopInfos,
            DetailBaseInfo,
            DetailSwipers,
            DetailNavBar
        },
        mixins:[backTopMixin],
        data(){
            return{
                id:null,
                topImgs:[],
                goods:{},
                shop:{},
                detailInfo:{},
                goodsParam:{},
                commentInfo:{},
                recommends:[],
                themeTopYs:[],
                getThemeTopY:null,
                currentIndex:0
            }
        },
        created() {
            //保存传入的ID
            this.id = this.$route.params.id
            //根据ID请求详情数据
            getDetail(this.id).then(res=>{
                //获取商品详情轮播图
                //console.log(res);
                const result = res.data.result
                this.topImgs = result.itemInfo.topImages;

                //获取商品信息
                this.goods = new Goods(result.itemInfo,result.columns,result.shopInfo.services)

                //获取店铺信息
                this.shop = new Shop(result.shopInfo)

                //商品详情图片
                this.detailInfo = result.detailInfo

                //商品参数
                this.goodsParam = new GoodsParam(result.itemParams.info,result.itemParams.rule)

                //评论
                if(result.rate.cRate !== 0){
                    this.commentInfo = result.rate.list[0]
                }

            })

            getRecommend().then(res=>{
                this.recommends = res.data.data.list
            })

            //防抖函数
            this.getThemeTopY = debounce(()=>{
                //等模板渲染完成后再计算元素的offsetTop
                this.themeTopYs.push(0)     //对应商品
                this.themeTopYs.push(this.$refs.param.$el.offsetTop)     //对应参数
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop)     //对应评论
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)     //对应推荐
                this.themeTopYs.push(Number.MAX_VALUE)  //给最后一位放一个较大的值 可以不用考虑单独判断最后一位的问题
            },100)
        },
        mounted() {

        },
        methods:{
            imgLoad(){
                //刷新页面高度
                this.$refs.scroll.refresh()

                this.getThemeTopY()
            },
            titleClick(index){
                this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
            },
            contentScroll(position){
                //获取y轴坐标
               const positionY =  -position.y

                //判断回到顶部的按钮是否显示
                this.showBackTop(position)

                //y轴坐标和主题集合中的值对比
                let length = this.themeTopYs.length;
                for (let i = 0; i < length-1; i++) {

                    //滚动到符合高度后 将集合中的下标赋值给变量 变量currentIndex的作用是为了减少赋值次数 必须在两个条件都满足的情况下才会赋值
                    if(this.currentIndex !== i && (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
                        this.currentIndex = i
                        this.$refs.nav.currentIndex = this.currentIndex
                    }
                }
            },
            addCart(){
                //获取购物车需要的信息
                const product = {}
                product.image = this.topImgs[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.price = this.goods.newPrice;
                product.id = this.id;

                //将商品添加到购物车中
                //this.$store.commit('addCart',product)
                this.$store.dispatch('addCart',product)     //dispatch调用vuex中actions的方法
            }
        }
    }
</script>

<style scoped>
    /*隐藏底部菜单栏 设置页面高度*/
    #detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    /*设置scroll高度 100%高度-导航栏高度 - 底部菜单栏高度*/
    .content{
        height: calc(100% - 93px);
    }

    /*固定导航栏*/
    .detail-nav{
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>