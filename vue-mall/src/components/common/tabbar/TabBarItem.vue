<template>

    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>      <!--默认图标插槽-->
        </div>

        <div v-else>
            <slot name="item-icon-active"></slot>      <!--被选中的图标插槽 被选中后显示-->
        </div>

        <div :style="activeStyle">
            <slot name="item-text"></slot>      <!--工具栏文字插槽 被选中后动态绑定一个样式-->
        </div>
        <!--
        将固定内容抽取为插槽，使该组件可扩展
        <img src="../../assets/img/tabbar/home.svg">
        <div>首页</div>-->
    </div>

</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,       //父组件传递给子组件字符串类型的路由路径
          activeColor:{
              type:String,
              default:'dodgerblue'
          }
        },
        data(){
            return{
                //isActive: true      //工具栏中的菜单是否被选中
            }
        },
        computed:{
            isActive(){
                /* 点击工具栏菜单时文字变色
                * 判断当前活跃的路由对象路径和当前Vue实例的路径是否相同
                * ===：完全相等，不适用于路径，路径后可能还会追加参数
                * indexOf:只要两个变量有匹配项即可，不需要完全相等*/
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                /*动态的给活跃路由菜单绑定样式
                * 如果是活跃路由则动态绑定默认样式，否则使用组件中设置的样式*/
                return this.isActive ? {color:this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>

    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;

    }

    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }

    /*.active{
        color: dodgerblue;
    }*/
</style>