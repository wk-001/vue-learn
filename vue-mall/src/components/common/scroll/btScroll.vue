<template>
    <div class="wrapper" ref="wrapper">    <!--将该元素绑定到ref，明确拿到该元素-->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import bScroll from 'better-scroll'

    export default {
        name: "btScroll",
        props:{
          probeType: {
              type:Number,
              default:0
          },
          pullUpLoad:{
              type: Boolean,
              default: false
          }
        },
        data(){
          return{
              scroll:null
          }
        },
        mounted() {
            /* 创建BScroll对象
            通过this.$refs.wrapper明确拿到ref绑定的元素*/
            this.scroll = new bScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,     //根据父组件传递的参数判断是否监听页面滚动
                pullUpLoad:this.pullUpLoad      //根据父组件传递的参数判断是否监听上拉事件
            })

            //监听页面滚动
            this.scroll.on('scroll',(position)=>{
                //将监听到的坐标信息传递给需要用到的组件
                this.$emit('scroll',position)
            })

            //监听上拉事件
            this.scroll.on('pullingUp',()=>{
                //将监听到的事件传递给需要用到的组件
                this.$emit('pullingUp')
                //数据请求完成并展示新的数据后本次监听完成，可以再次加载
                this.scroll.finishPullUp();
            })

            this.scroll.refresh();      //加载完数据后刷新scroll的高度
        },
        methods:{
            scrollTo(x,y,time){
                //scroll对象不为空的情况下才执行后面的代码
                this.scroll && this.scroll.scrollTo(x,y,time)
            },
            refresh(){
                console.log('111');
                this.scroll && this.scroll.refresh();
            }
        }
    }
</script>

<style scoped>

</style>