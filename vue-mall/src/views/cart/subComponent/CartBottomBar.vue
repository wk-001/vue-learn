<!--购物车结算菜单-->
<template>
    <div class="bottom-bar">
        <div class="selected-content">
            <selected-goods class="selected-all"
                            :isSelected="isSelectedAll"
                            @click.native="selectAll"/>
            <span>全选</span>
        </div>

        <div class="price">
            合计：￥{{totalPrice}}
        </div>

        <div class="cal" @click="calClick">
            结算（{{goodsLength}}）
        </div>

    </div>
</template>

<script>
    import SelectedGoods from "components/content/selectedGoods/SelectedGoods";
    import {mapGetters} from 'vuex'
    export default {
        name: "CartBottomBar",
        components: {SelectedGoods},
        computed:{
            ...mapGetters({
               list:'cartList'      //给映射getters.js的方法名起一个别名list
            }),
            totalPrice(){
                return this.list.filter(item=>{
                    return item.selected
                }).reduce((pre,item)=>{
                    return pre+(item.price * item.count)
                },0).toFixed(2)
            },
            goodsLength(){
                return this.list.filter(item=>item.selected).length
            },
            isSelectedAll(){
                if (this.list.length===0) return false
                //如果集合中存在未选中的元素则返回false
                //return !this.$store.state.cartGoods.find(item=>!item.selected)

                /*判断数组中是否每个元素都满足条件
                只有都满足条件才返回true；
                只要有一个不满足就返回false；*/
                return this.list.every(item=>item.selected)

                //选中的商品数量和总商品数量不一致则返回false
                //return !(this.$store.state.cartGoods.length !== this.goodsLength)
            }
        },
        methods:{
            selectAll(){
                //商品全选的情况下点击取消全选 部分选中或全不选则点击全选
                if (this.isSelectedAll){
                    this.list.forEach(item=>item.selected=false)
                }else{
                    this.list.forEach(item=>item.selected=true)
                }
            },
            calClick(){
                if (!this.isSelectedAll){
                    //如果购物车中没有一个商品被选中，弹窗提示
                    this.$toast.show("请选择要购买的商品", 1500)
                }
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