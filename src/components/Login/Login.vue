<template>
    <div class="loginFormWrap">
        <div v-if="isShowClose" @click="close" class="icon icon-close "></div>
        <div class="content">
            <div class="headerWrap">
                <div class="loginHeader">
                    <div @click="type = 0" :class="type == 0 ? 'active' :''" class="item mobileLogin">账号登录</div>
                    <!-- <div class="line"></div>
                    <div @click="type = 1" :class="type == 1 ? 'active' :''" class="item mailLogin">邮箱登录</div> -->
                </div>
                <div class="loginContent">
                    <div class="label user">
                        <div class="icon1 icon icon-shouji"></div>
                        <input type="text" @input="input1"  placeholder="请输入登录账号">
                        <div v-show="show1" @click="delInfo" class="icon icon-close_b"></div>
                    </div>
                    <div class="label pass">
                        <div class="icon1 icon icon-lock"></div>
                        <input type="password" @input="input1" placeholder="请输入登录密码">
                        <div v-show="show2" @click="delInfo2" class="icon icon-close_b"></div>
                    </div>
                    <div class="nerror" v-show="isShowErr">
                        <div class="icon icon-jinggao"></div>
                        <div class="ferrorhead">{{errText}}</div>
                    </div>
                    <button @click="handleLogin" class="loginbtn">登录</button>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default{
    props:{
      isShowClosE:{
          type:Boolean,
          default:true,
      }  
    },
    name:"loginC",
    data(){
        return{

            type:0,
            username:'',
            password:'',
            show1:false,
            show2:false,
            // err 信息
            errText:'',
            isShowErr:false,

            isShowClose:this.isShowClosE,
        }
    },
    methods:{

        delInfo(){
            this.username = '';
        },
        input1(e){
            this.username = e.target.value
        },
        input2(e){
            this.password = e.target.value
        },
        delInfo2(){
            this.password = '';
        },
        close(){
            this.$emit('closeLogin');
        },
        handleLogin(){
            if(this.username == '' || this.password == ''){
                this.errText = '账号或密码有误，请正确输入！'
                this.isShowErr = true
            }
        }
    }
}

</script>

<style lang="scss">
    .loginFormWrap{
        top: 81.5px;
        display: block;
        width: 380px;
        overflow: visible;
        margin: 0 auto;
        height: 300px;
        background-color: transparent;
        .icon-close{
            width: 24px;
            height: 24px;
            position: absolute;
            top: 12px;
            right: 12px;
            font-size: 22px;
            z-index: 1;
            cursor: pointer;
        }
        .content{
            .headerWrap{
                height: 100%;
                // width: 100%;
                position: absolute;
                overflow: hidden;
                padding: 30px 0 10px;
                .loginHeader{
                    position: absolute;
                    overflow: hidden;
                    padding: 30px 0 10px;
                    left: 29px;
                    font-size: 18px;
                    color: #333;
                    letter-spacing: 0;
                    line-height: 18px;
                    width: 306px;
                    overflow: hidden;
                    .line{
                        width: 1px;
                        height: 20px;
                        background: #ddd;
                        margin-left: 55px;
                        float: left;
                    }
                    .item{
                        float: left;
                        cursor: pointer;
                        color: #999;
                        margin-left: 25px;
                        &.mailLogin{
                            margin-left: 55px;
                        }
                        &.active{
                            color: #333;
                        }
                    }
                }
                .loginContent{
                    padding: 68px 40px 83px;
                    width: 300px;
                    margin: 0 auto;
                    background-color: #fff;
                    margin: 20px 0 0;
                    .label{
                        width: 300px;
                        height: 38px;
                        box-sizing: border-box;
                        display: flex;
                        border: 1px solid #999;
                        line-height: 38px;
                        color: #aaa;
                        align-content: center;
                        justify-content: space-between;
                        overflow: hidden;
                        &.pass{
                            margin-top:15px;
                        }
                        .icon1{
                            display: block;
                            display: inline-block;
                            height: 24px;
                            line-height: 24px;
                            padding-right: 7px;
                            margin: auto 0;
                            border-right: 1px solid #e8e8e8;
                            text-align: center;
                            font-size: 22px;
                            width: 38px;
                            text-align: center;
                        }
                        input{
                            flex:2;
                            border: none;
                            display: block;
                            height: 100%;
                            outline: none;
                            padding-left: 8px;
                            &::after{
                                content: "";
                                border-left: 1px solid #aaa;
                            }
                        }
                        .icon-close_b{
                            display: inline-block;
                            width: 20px;
                            height: 36px;
                            line-height: 36px;
                            cursor: pointer;
                        }
                    }
                    .nerror{
                        margin:10px 0;
                        display: flex;
                        align-items: center;
                        color:red;
                        .icon{font-size: 22px}
                        .ferrorhead{
                            margin-left: 10px;
                        }
                    }
                    .loginbtn{
                        outline: none;
                        border:none;
                        display: block;
                        width: 100%;
                        height: 48px;
                        cursor: pointer;
                        text-align: center;
                        color: #fff;
                        background: #b4a078;
                        font-size: 18px;
                        margin: 20px 0;
                        line-height: 48px;
                        border-radius: 2px;
                    }
                }
            }
        }
    }
</style>

