<!--购物车结算菜单-->
<template>
    <div class="bottom-bar">
        <div class="selected-content">
            <selected-goods class="selected-all" :is-selected="isSelected" @click.native="selectedClick"/>
            <span>全选</span>
        </div>

        <div class="price">
            合计：￥{{totalPrice}}
        </div>

        <div class="cal">
            结算（{{goodsLength}}）
        </div>

    </div>
</template>

<script>
    import SelectedGoods from "components/content/selectedGoods/SelectedGoods";
    export default {
        name: "CartBottomBar",
        components: {SelectedGoods},
        data(){
          return{
              isSelected:false
          }
        },
        computed:{
            totalPrice(){
                return this.$store.state.cartGoods.filter(item=>{
                    return item.selected
                }).reduce((pre,item)=>{
                    return pre+(item.price * item.count)
                },0).toFixed(2)
            },
            goodsLength(){
                return this.$store.state.cartGoods.filter(item=>item.selected).length
            }
        },
        methods:{
            selectedClick(){
                this.isSelected = !this.isSelected
            }
        }
    }
</script>

<style scoped>
    .bottom-bar{
        height: 40px;
        background-color: #eee;
        display: flex;
        align-items: center;
    }

    .selected-all{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .selected-content{
        width: 70px;
        display: flex;
        margin-left: 10px;
    }

    .price{
        margin-left: 45px;
        flex: 1;
    }

    .cal{
        width:90px;
        height: 40px;
        background-color: orange;
        display: flex;
        align-items: center;
        text-align: center;
        padding-left: 15px;
    }

    .selected{
        background-color: red;
        border-color: red;
    }
</style>