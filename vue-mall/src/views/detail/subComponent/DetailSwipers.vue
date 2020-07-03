<!--商品详情页轮播图-->
<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="item in topImgs">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
    
    /*轮播图组件*/
    import {Swiper,SwiperItem} from "components/common/swiper";
    
    export default {
        name: "DetailSwipers",
        components: {Swiper,SwiperItem},
        props:{
            topImgs:{
                type:Array,
                default(){
                    return[]
                }
            }
        }
    }
</script>

<style scoped>
    .detail-swiper{
        height: 300px;
        overflow: hidden;
    }
</style>