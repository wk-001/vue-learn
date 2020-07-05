<template>
    <div>
        <!--导航栏-->
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg"/>
            </div>
            <div class="title" slot="center">
                <div v-for="(item,index) in titles"
                     class="title-item"
                     @click="titleClick(index)"
                     :class="{active:index==currentIndex}"
                >
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>

    /*导航栏*/
    import NavBar from "components/common/navbar/NavBar";

    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                titles:['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        methods:{
            titleClick(index){
                this.currentIndex = index
                this.$emit('titleClick',index)
            },
            backClick(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .title{
        display: flex;
        color: #0b2e13;
        font-size: 14px;
    }

    .title-item{
        flex: 1;
    }

    .active{
        color: var(--color-high-text);
    }

    .back{
        margin-top: 5px;
    }
</style>