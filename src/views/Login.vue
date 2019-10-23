<template>
    <div>
        <MyHeader />
        <div class="bg">
            <Login />
        </div>
        <MyFooter />
    </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import Login from "@/components/Login/Login.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
export default{
  components: {  MyHeader,Login, MyFooter },
    name:"login",
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
    .bg{
        width: 100%;
        height: 410px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(../assets/img/loginBg.jpg);
        .loginFormWrap{
            margin: 0 20px 0 auto;
            .content .headerWrap .loginHeader{
                padding: 50px 0 10px;
            }
        }
    }
</style>

