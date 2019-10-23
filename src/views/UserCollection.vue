<template>
    <div>
        <MyHeader />
        <div class="collectionBox">
            <div class="row">
                <!-- 面包屑 -->
                <div class="crumbs">
                    <router-link  to="/">首页</router-link>
                    <div class="icon icon-right_s"></div>
                    <span class="">我的收藏</span>
                </div>
                <div class="content">
                    <UserSide />
                    <div class="collectionContent">
                        
                    </div>
                </div>
            </div>
        </div>
        <MyFooter />
    </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import UserSide from "@/components/UserSide/UserSide.vue";
// import Popup from "@/components/Popup/Popup.vue"

export default{
  components: {  MyHeader,  MyFooter ,UserSide,}, 
    name:"userCollection",
    data(){
        return{
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        
    },
}
</script>

<style lang="scss">
    .collectionBox{
        .collectionContent{

        }
    }
</style>

