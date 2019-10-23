<template>
    <div>
        <MyHeader />
        <div class="margin-top-50">
            <div class="row">
                <div class="confirmRoot">
                    <div class="panel">
                        <div class="hd">
                            <span>收货信息</span>
                        </div>
                        <div class="bd">
                            <div class="orderAddress">
                                <div class="leftInfo">
                                    <p class="line">
                                        <i class="icon icon-dingwei"></i>
                                        <span class="defaultTxt">默认地址</span>
                                    </p>
                                    <p class="line">
                                        <label for="">收货人：</label>
                                        <span class="text">景冰川</span>
                                    </p>
                                    <p class="line">
                                        <label for="">联系方式：</label>
                                        <span class="text">184****7522</span>
                                    </p>
                                    <p class="line">
                                        <label for="">收货地址：</label>
                                        <span class="text">山西省太原市小店区平阳路街道小区</span>
                                    </p>
                                </div>
                                <div class="rightInfo">
                                    <p class="changeAddress">
                                        <a @click="showForm('changeAdd')" class="w-link" href="javascript:;">地址切换</a>
                                    </p>
                                    <button @click="showForm('addressForm')" class="w-button">新建地址</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="itemInfo">
                        <div class="packageList">
                            <div class="info">
                                <span class="seqNo">包裹1</span>
                                <span class="postTimeDesc">19:40前完成支付, 预计(明天)10月23日送达</span>
                            </div>
                            <div class="m-table">
                                <div class="theadBg"></div>
                                <table>
                                    <thead class="hd">
                                        <tr>
                                            <td >商品信息</td>
                                            <td >单价</td>
                                            <td >数量</td>
                                            <td >小计</td>
                                            <td >实付</td>
                                        </tr>
                                    </thead>
                                    <tbody class="tbody">
                                        <tr>
                                            <td>
                                                <div class="imgWrap">
                                                    <img  src="https://yanxuan-item.nosdn.127.net/9b2a8ee4cb222d7ddd5885e57ce2dfe3.png?imageView&quality=95&thumbnail=100x100" alt="">
                                                </div>
                                                <div class="infoWrap">
                                                    <div class="name">女式加厚圆领坑条100%山羊绒衫2.0</div>
                                                    <div class="type">天空蓝2.0 XL（175/92A）≈395g </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="tdWrap priceWrap">¥899.00</p>
                                            </td>
                                            <td>
                                                <p class="tdWrap numberWarp">1</p>
                                            </td>
                                            <td>
                                                <p class="tdWrap">¥899.00</p>
                                            </td>
                                            <td>
                                                <p class="tdWrap">¥719.20</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="itemInfoFt">
                            <div class="row1">
                                <div class="col">
                                    <div class="tt">使用优惠券(0张)</div>
                                    <div class="m-activeForm">兑换优惠券</div>
                                </div>
                                <div class="col">
                                    <div class="tt">使用回馈金</div>
                                    <div class="m-activeForm">暂无</div>
                                </div>
                                <div class="col">
                                    <div class="tt">使用礼品卡</div>
                                    <div class="m-activeForm">可用余额 ¥0.00</div>
                                </div>
                            </div>
                            <div class="row2">
                                <div class="leftInfo"></div>
                                <div class="rightInfo">
                                    <div class="confirmPayInfo">
                                        <div class="payItemsInfo">
                                            <div class="line1">
                                                <label for="">商品合计:</label>
                                                <span class="data">¥899.00</span>
                                            </div>
                                            <div class="line1">
                                                <label for="">运费:</label>
                                                <span class="data">¥0.00</span>
                                            </div>
                                            <div class="line1">
                                                <label for="">活动优惠:</label>
                                                <span class="data">-¥179.80</span>
                                            </div>
                                            <div class="line4">
                                                <label for="">应付总额:</label>
                                                <span class="data">¥719.20</span>
                                            </div>
                                            <div class="line5">
                                                <button class="submint">去付款</button>
                                            </div>
                                            <div class="line6">
                                                <p>
                                                    <span>景冰川</span>    
                                                    <span>184****7522</span>
                                                </p>  
                                                <p class="address">山西省太原市小店区平阳路街道小区</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MyFooter />

        <!-- addAddress -->
        <Popup ref="addressForm" :custom="false" :maskClick="false" type="center" >
            <div class="Form">
                <div class="FormHead">新建地址</div>
                <div @click="calse('addressForm')" class="icon icon-close"></div>
                <AddressForm @calse="calse('addressForm')" />
            </div>
		</Popup>
        <!-- changeAddress -->
        <Popup ref="changeAdd" :custom="false" :maskClick="false" type="center" >
            <div class="Form changeBox">
                <div class="FormHead">选择地址</div>
                <div @click="calse('changeAdd')" class="icon icon-close"></div>
                <div class="addressList">
                    <div class="item" @click="changeInit = index" :class="changeInit == index ? 'active' :''" v-for="(item,index) in $store.state.addressList" :key='index'>
                        <div class="line">
                            <span class="label">收货人：</span>
                            <span class="text">{{item.user_name}}</span>
                        </div>
                        <div class="line">
                            <span class="label">联系方式：</span>
                            <span class="text">{{item.user_phone}}</span>
                        </div>
                        <div class="line">
                            <span class="label">收货地址：</span>
                            <span class="text">{{item.province}}{{item.city}}{{item.area}}{{item.detailed}}</span>
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <button class="changesubmit">确定</button>
                    <button class="changecancel">取消</button>
                </div>
            </div>
		</Popup>
    </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import AddressForm from "@/components/AddressForm/AddressForm";
import Popup from "@/components/Popup/Popup.vue"
export default{
  components: {  MyHeader, MyFooter ,AddressForm ,Popup},
    name:"order",
    data(){
        return{
            changeInit:0,
        }
    },
    created(){
        
    },
    methods:{
        showForm(name){
            this.$refs[name].open()
        },
        calse(name){
            this.$refs[name].close()
        }
    }
}
</script>

<style lang="scss">
    .confirmRoot{
        .panel{
            margin-bottom: 20px;
            border: 1px solid #e8e8e8;
            background-color: #fff;
            .hd {
                padding-left: 21px;
                background-color: #f5f5f5;
                height: 42px;
                border-bottom: 1px solid #e8e8e8;
                line-height: 41px;
                color: #999;
                font-size: 14px;
            }
            .bd{
                .orderAddress{
                    display: flex;
                    justify-content: space-between;
                    padding: 30px 0 30px 30px;
                    .leftInfo{
                        width: 805px;
                        font-size: 14px;
                        .icon{
                            font-size: 18px;
                        }
                        .line{
                            line-height: 24px;
                            margin-top: 10px;
                            display: flex;
                            .defaultTxt {
                                letter-spacing: 5px;
                                display: inline-block;
                                height: 32px;
                                line-height: 34px;
                                padding-left: 10px;
                            }
                            &:first-child{
                                margin: 0
                            }
                            label {
                                color: #999;
                                width: 70px;
                                text-align: center;
                                max-width: 720px;
                            }
                            .text{
                                max-width: 720px;
                            }
                        }
                    }
                    .rightInfo{
                        width: 253px;
                        height: 58px;
                        border-left: 1px solid #e8e8e8;
                        text-align: center;
                        margin-top: 44px;
                        .changeAddress {
                            line-height: 1;
                            margin-bottom: 16px;
                            .w-link{
                                color: #69c;
                                font-size:14px;
                            }
                        }
                        .w-button {
                            border-radius: 2px;
                            width: 96px;
                            height: 28px;
                            padding: 0;
                            letter-spacing: normal;
                            line-height: 26px;
                            font-size: 12px;
                            text-align: center;
                            color: #333;
                            border: 1px solid #ccc;
                            background-color: #f5f5f5;
                            cursor: pointer;
                            &:hover{
                                color: #333;
                                border: 1px solid #ccc;
                                background-color: #fff;
                            }
                        }
                    }
                }
            }
        } 
        .itemInfo{
            margin-bottom: 96px;
            .packageList{
                font-size: 14px;
                .info {
                    height: 42px;
                    line-height: 40px;
                    background: #F8F5F0;
                    border: 1px solid #E8E8E8;
                    margin: -1px 0;
                    padding: 0 20px;
                    color: #666;
                    .seqNo{
                        margin-right: 20px;
                        font-weight: 400;
                    }
                }
                .m-table{
                    box-sizing: border-box;
                    border: 1px solid #e8e8e8;
                    position: relative;
                    width: 100%;
                    padding: 0 21px;
                    background-color: #fff;
                    table {
                        border-collapse: collapse;
                        border-spacing: 0;
                        table-layout: fixed;
                        position: relative;
                        z-index: 1;
                        text-align: center;
                        td{
                            &:nth-child(2){
                                width: 165px;
                            }
                            &:nth-child(3){
                                width: 171px;
                            }
                            &:nth-child(4){
                                width: 191px;
                            }
                            &:nth-child(5){
                                width: 179px;
                            }
                            &:first-child{
                                text-align: left;
                                width: 360px
                            }
                        }
                        .tbody{
                            .imgWrap img {
                                width: 100px;
                                height: 100px;
                                background-color: #f4f4f4;
                            }
                            td{
                                padding: 20px 0;
                                .infoWrap {
                                    position: relative;
                                    margin-left: 15px;
                                    height: 100px;
                                    padding: 2px 0 0 10px;
                                    pointer-events: none;
                                }
                                &:first-child{
                                    display:flex;
                                    .name{
                                        line-height: 24px;
                                        max-width: 210px;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                    }
                                    .type{
                                        max-width: 248px;
                                        overflow: hidden;
                                        line-height: 22px;
                                        font-size: 12px;
                                        color: #999;
                                    }
                                }
                            }
                        }
                    }
                    .hd {
                        line-height: 41px;
                        height: 42px;
                        color: #999;
                    }
                    .theadBg{
                        position: absolute;
                        height: 42px;
                        top: 0;
                        left: 0;
                        z-index: 0;
                        width: 100%;
                        background-color: #f5f5f5;
                    }
                }
            }
            .itemInfoFt{
                background-color: #f5f5f5;
                border-left: 1px solid #E8E8E8;
                border-right: 1px solid #E8E8E8;
                border-bottom: 1px solid #E8E8E8;
                .row1{
                    display: flex;
                    flex-flow: row nowrap;
                    padding: 20px 0;
                    border-bottom: 1px solid #E8E8E8;
                    min-height: 103px;
                    .col{
                        padding: 5px 20px;
                        flex: 1;
                        border-right: 1px dashed #ddd;
                        float: left;
                        &:last-child{
                            border: none;
                        }
                        .tt{
                            font-size: 14px;
                            color: #666;
                            line-height: 1;
                        }
                        .m-activeForm {
                            font-size: 14px;
                            margin-top: 12px;
                            line-height: 1;
                            position: relative;
                        }
                        .line{
                            color: #333;
                            margin-bottom: 15px;
                        }
                    }
                }
                .row2{
                    display: flex;
                    justify-content: space-between;
                    flex-flow: row nowrap;
                    padding: 20px 40px 40px 30px;
                    overflow: hidden;
                    .rightInfo{
                        .confirmPayInfo{
                            text-align: right;
                            position: relative;
                            .payItemsInfo{
                                position: relative;
                                .line1{
                                    width: 280px;
                                    font-size: 14px;
                                    margin-bottom: 20px;
                                    display: flex;
                                    justify-content: space-between;
                                    label{
                                        display: inline-block;
                                        width: 71px;
                                        text-align: right;
                                    }
                                    .data{
                                        text-align: right;
                                    }
                                }
                                .line4 {
                                    margin-bottom: 20px;
                                    padding-top: 24px;
                                    border-top: 1px solid #e8e8e8;
                                    font-size: 14px;
                                    width: 280px;
                                    display: inline-block;
                                    display: flex;
                                    justify-content: space-between;
                                    .data{
                                        text-align: right;
                                        font-weight: 700;
                                        color: #d4282d;
                                        font-size: 20px;
                                    }
                                }
                                .line5 {
                                    button{
                                        outline: none;
                                        cursor: pointer;
                                        color: #fff;
                                        border: 1px solid #c0ae8a;
                                        background-color: #c0ae8a;
                                        width: 168px;
                                        height: 50px;
                                        line-height: 50px;
                                        font-size: 18px;
                                    }
                                }
                                .line6{
                                    font-size:14px;
                                    line-height: 22px;
                                    margin-top: 15px;
                                    p{
                                        span{
                                            &:last-child{
                                                margin-left: 10px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // 弹框
    .Form{
        position: relative;
        width: 697px;
        height: 422px;
        padding: 30px 40px 0;
        min-height: 274px;
        margin: 0 auto;
        background-color: #fff;
        z-index: 10;
        box-sizing: border-box;
        &.changeBox{
            width: 600px;
            height: 500px;
            .addressList{
                height: 340px;
                width: 545px;
                overflow: auto;
                .item{
                    border: 1px solid #e8e8e8;
                    width: 525px;
                    margin-bottom: 10px;
                    padding: 20px 25px;
                    cursor: pointer;
                    box-sizing: border-box;
                    position: relative;
                    &.active{
                        border: 2px solid #b4a078;
                    }
                    .line{
                            font-size: 14px;
                            line-height: 24px;
                            margin-top: 10px;
                            display: flex;
                            &:first-child{
                                margin: 0
                            }
                            .label {
                                color: #999;
                                width: 70px;
                                text-align: center;
                                max-width: 720px;
                            }
                            .text{
                                max-width: 720px;
                            }
                        }
                }
            }
            .btns{
                display: flex;
                justify-content: flex-end;
                margin: 20px 20px 0 0;
                button{
                    outline: none;
                    cursor: pointer;
                    border-radius: 2px;
                    width: 140px;
                    height: 28px;
                    padding: 0;
                    letter-spacing: normal;
                    line-height: 26px;
                    font-size: 12px;
                    text-align: center;
                    color: #333;
                    border: 1px solid #ccc;
                    background-color: #f5f5f5;
                    height: 42px;
                    line-height: 40px;
                    font-size: 16px;
                    &.changesubmit{
                        color: #fff;
                        border: 1px solid #b4a078;    
                        background-color: #b4a078;
                    }
                    &.changecancel{
                        color: #b4a078;
                        border: 1px solid #b4a078;
                        background-color: #f5f3ef;
                        margin-left: 10px;
                    }
                }
            }
        }
        .FormHead{
            font-size: 18px;
            margin-bottom: 40px;
            line-height: 1;
        }
        .icon{
            display: inline-block;
            overflow: hidden;
            vertical-align: top;
            font-size: 12px;
            word-spacing: normal;
            letter-spacing: normal;
            width: 24px;
            font-size: 24px;
            height: 24px;
            right:40px;
            top: 20px;
            position: absolute;
            cursor: pointer;
        }
    }
    
</style>

