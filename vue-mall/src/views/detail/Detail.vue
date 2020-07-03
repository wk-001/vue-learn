<template>
    <div id="detail">
        <!--导航栏-->
        <detail-nav-bar class="detail-nav"/>

        <bt-scroll class="content" :probe-type="2" ref="scroll">

            <!--详情图片轮播图-->
            <detail-swipers :top-imgs="topImgs"/>

            <!--商品详情-->
            <detail-base-info :goods="goods"/>

            <!--店铺信息-->
            <detail-shop-infos :shop="shop"/>

            <!--商品详情信息-->
            <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>

            <!--商品参数-->
            <detail-param-info :paramInfo="goodsParam"/>
        </bt-scroll>

    </div>
</template>

<script>

    //导航栏
    import DetailNavBar from "./subComponent/DetailNavBar";

    //发送请求获取商品详情
    import {getDetail,Goods,Shop,GoodsParam} from "network/detail";

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

    export default {
        name: "Detail",
        components:{
            DetailParamInfo,
            DetailGoodsInfo,
            btScroll,
            DetailShopInfos,
            DetailBaseInfo,
            DetailSwipers,
            DetailNavBar
        },
        data(){
            return{
                id:null,
                topImgs:[],
                goods:{},
                shop:{},
                detailInfo:{},
                goodsParam:{}
            }
        },
        created() {
            //保存传入的ID
            this.id = this.$route.params.id
            //根据ID请求详情数据
            getDetail(this.id).then(res=>{
                //获取商品详情轮播图
                console.log(res);
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
            })
        },
        methods:{
            imgLoad(){
                //刷新页面高度
                this.$refs.scroll.refresh()
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

    /*设置scroll高度 100%高度-导航栏高度*/
    .content{
        height: calc(100% - 44px);
    }

    /*固定导航栏*/
    .detail-nav{
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>