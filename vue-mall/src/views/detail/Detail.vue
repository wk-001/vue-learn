<template>
    <div id="detail">
        <!--导航栏-->
        <detail-nav-bar/>
    </div>
</template>

<script>

    import DetailNavBar from "./subComponent/DetailNavBar";

    export default {
        name: "Detail",
        components:{
            DetailNavBar
        },
        data(){
            return{
                id:null
            }
        },
        created() {
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped>

</style>