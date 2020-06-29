<!--标签选项卡-->
<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tab-control-item"
        :class="{active:index===currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{             //选项卡样式一样 文字不一样，将文字作为参数传递
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0      //记录当前选中的选项卡
            }
        },
        methods:{
            itemClick(index){   //点击对应的选项卡后的操作
                this.currentIndex = index
                //子组件通过$emit()来触发事件。
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }

    .tab-control-item{
        flex: 1;
    }

    .tab-control-item span{
        padding: 5px;
    }

    .active{
        color: var(--color-high-text);
    }

    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>