<!--弹窗-->
<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props:{
           /* message:{
                type:String,
                default:''
            },
            show:{
                type:Boolean,
                default: false
            }*/
        },
        data(){
          return{
              message:'',
              isShow:false
          }
        },
        methods:{
            show(message='默认提示',duration=1500){    //第二个参数是弹窗显示时间 并设置默认值
                this.isShow = true
                this.message = message

                setTimeout(()=>{
                    this.isShow = false
                    this.message = ''
                },duration)
            }
        }
    }
</script>

<style scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        padding: 8px 10px;
        transform: translate(-50%,-50%);    /*居中位置*/

        z-index: 99;

        color: white;
        background-color: rgba(0,0,0,.75);
    }
</style>