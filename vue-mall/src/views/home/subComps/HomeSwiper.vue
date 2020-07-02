<!--首页轮播图-->
<template>

    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>

</template>

<script>

    /*导入轮播图组件*/
    import {Swiper,SwiperItem} from "components/common/swiper";

    export default {
        name: "HomeSwiper",
        props:{     //父组件通过props向子组件传递数据
            banners:{
                type:Array,     //设置数据类型
                default(){      //默认值必须是一个函数
                    return []
                }
            }
        },
        data(){
          return{
              isLoad:true
          }
        },
        components:{
            Swiper,
            SwiperItem
        },
        methods:{
            imgLoad(){  //监听图片加载状态
                //轮播图4张图片发送一次即可
                if (this.isLoad){
                    this.$emit('swiperImgLoad')
                    this.isLoad = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>