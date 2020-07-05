//声明混入

//回到顶部按钮
import BackTopBtn from "components/content/backTop/BackTopBtn";

export const backTopMixin = {
    components:{
        BackTopBtn
    },
    data(){
        return{
            //默认不显示回到顶部按钮
            showBackBtn:false
        }
    },
    methods:{
        backClick(){
            /*btScroll是ref的值，
            * scrollTo是BTScroll组件封装的better-scroll的方法，指定滚动的x y坐标，500毫秒内完成操作*/
            this.$refs.scroll.scrollTo(0,0,500)
        },
        showBackTop(position){
            //判断回到顶部的按钮是否显示
            this.showBackBtn = position.y<-1000
        }
    }
}