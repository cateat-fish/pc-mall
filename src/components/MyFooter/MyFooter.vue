<template>
  <div class="footer" >
    <div class="ft1">
        <div class="row">
            <div class="item">
                <div class="serviceTel">
                    <div class="hd">客户服务</div>
                    <div class="">
                        <a href="" class="kefuBtn">
                            <i class="icon icon-erjikefu"></i>
                            <div class="margin-top-10">在线客服</div>
                        </a>
                        <a href="" class="feedbackBtn">
                            <i class="icon icon-comment"></i>
                            <div class="margin-top-10">用户反馈</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="whatIsYX">
                    <div class="hd">何为严选</div>
                    <p class="desc">网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到优质的商品</p>
                </div>
                <div class="followUs">
                    <p class="title">关注我们 :</p>
                    <div class="followWayList">
                        <div class="followWay">
                            <i class="icon icon-weichat"></i>
                        </div>
                        <div class="followWay">
                            <i class="icon icon-weichat"></i>
                        </div>
                        <div class="followWay">
                            <i class="icon icon-weichat"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ftAppDownload">
                    <h4 class="hd">扫码下载严选APP</h4>
                    <div class="footQRcode">
                        <img src="../../assets/img/code.png" alt="">
                    </div>
                    <div class="tip">下载领1000元新人礼包</div>
                </div>
            </div>
        </div>
    </div>
    <div class="ft2">
        <div class="row">
            <ul class="siteEnsure">
               <li class="item" v-for="(item,index) in siteEnsure" :key='index'>
                   <div class="inner">
                       <i :class="['icon',item.icon]"></i>
                       <p class="text">{{item.text}}</p> 
                   </div>
                </li> 
            </ul>
            <div class="hr"></div>
            <div class="siteInfo">
                <div class="nav">
                    <a class="text" :href="item.url" v-for="(item,index) in nav" :key='index'>
                        <span >{{item.text}}</span>
                        <b v-if="index < nav.length" class="split">|</b>
                    </a>
                    
                </div>
                <p class="copyright">
                    食品经营许可证：JY13301080111719出版物经营许可证：新出发滨字第0132号妙得ICP证号：ICP 证浙B2-20160106浙杭食药监械经营备20171029号营业执照网易公司版权所有 © 1997-2019
                </p>
                <p class="police">
                    无线电发射设备销售备案：42201919712647（浙杭）网械企备字[2019]第00119号（粤）网械平台备字（2019）第00004号单用途商业预付卡备案证：330100AAC0024
                </p>
            </div>
        </div>
    </div>

    <!-- FixedTool -->
    <FixedTool />
  </div>
</template>

<script>
import FixedTool from "../FixedTool/FixedTool"
export default {
  components:{FixedTool},
  name: 'MyFooter',
  data(){
    return{
        siteEnsure:[
            {icon:'icon-tel',text:'自营电商'},
            {icon:'icon-tel',text:'30天无忧退换货'},
            {icon:'icon-tel',text:'满88元免邮费'},
            {icon:'icon-tel',text:'品质保证'}
        ],
        nav:[
            {text:'关于我们',url:''},
            {text:'帮助中心',url:''},
            {text:'售后服务',url:''},
            {text:'配送与验收',url:''},
            {text:'商务合作',url:''},
            {text:'企业采购',url:''},
            {text:'开放平台',url:''},
            {text:'搜索推荐',url:''},
            {text:'友情链接',url:''},
            {text:'廉正举报',url:''},
            {text:'关于我们',url:''},
            {text:'关于我们',url:''},
        ]
    }
  }
}
</script>

<style lang="scss">
    .footer{
      clear: both;
      padding-top: 0;
      .ft1{
        height: 240px;
        padding-top: 60px;
        padding-bottom: 34px;
        background-color: #fff;
        border-top: 1px solid #e8e8e8;
        .item{
          width: 33.33333%;
          height: 204px;
          float: left;
          border-left: 1px solid #e9e9e9;
          &:last-child{
              width: 32%
          }
          &:first-child{
            border-left: 0;
          }
          .serviceTel{
              display: flex;
              flex-wrap: wrap;
              height: 100%;
              text-align: center;
              line-height: 1;
              justify-content: center;
              .hd{
                width: 100%;
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 28px;
                line-height: 1;
              }
              a{
                display: inline-block;
                float:left;
                width: 80px;
                height: 100px;
                font-size: 14px;
                background-color: #fff;
                padding-top: 25px;
                text-align: center;
                border: 1px solid #E8E8E8;
                box-sizing: border-box;
                i{
                    font-size: 30px;
                }
                &:last-child{
                  margin-left: 29px;
                }
                &:hover{
                  color: #b4a078;
                }
              }
          }
          .whatIsYX{
            padding: 0 37px;
            text-align: center;
            line-height: 1;
            .hd{
              font-size: 16px;
              font-weight: 400;
              margin-bottom: 28px;
              line-height: 1;
            }
            p.desc{
                text-align: left;
                font-size: 13px;
                line-height: 23px;
                margin-bottom: 22px;
            }
          }
          .followUs{
            padding: 0 37px;
            line-height: 1;
            text-align: left;
            .title{
                margin-right: 15px;
                margin-bottom: 0;
                font-size: 14px;
                line-height: 32px;
                float: left;
            }
            .followWayList{
                float: left;
                .followWay{
                    margin-right: 15px;
                    position: relative;
                    padding-bottom: 10px;
                    float: left;
                    &:nth-child(3){
                        margin-right: 0;
                    }
                    .icon{
                        font-size: 32px;
                        background-position: 0 -470px;
                        height: 32px;
                        width: 32px;
                    }
                }
            }
          }
          .ftAppDownload{
              text-align: center;
              .hd{
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 28px;
                line-height: 1;
              }
              .footQRcode{
                display: inline-block;
                width: 104px;
                height: 104px;
              }
              .tip{
                color: #b4a078;
                font-size: 12px;
                margin-top: 3px;
              }
          }
        }
      }
      .ft2{
        height: 250px;
        padding-top: 37px;
        background-color: #414141;
        .siteEnsure{
            height:50px;
            margin-bottom: 30px;
            padding-left: 17px;
            &::after{
                content: " ";
                display: table;
            }
            .item{
                float: left;
                margin-right: 122px;
                &:nth-child(4){
                    margin-right: 0;
                }
                
                .inner {
                    color: #fff;
                    font-size: 18px;
                    line-height: 51px;
                    display: inline-block;
                    vertical-align: middle;
                    .icon{
                        float: left;
                        margin-right: 17px;
                        font-size: 40px;
                        border: 3px solid #fff;
                        border-radius: 50%;
                        padding: 5px;
                        width: 40px;
                        line-height: 40px;
                        height: 40px;
                        display: inline-block;
                    }
                    .text{
                        float: left;
                    }
                }
            }

        }
        .hr{
            height: 1px;
            margin-bottom: 27px;
            background-color: #4f4f4f;
            border: 0;
        }
        .siteInfo{
            font-size: 12px;
            text-align: center;
            color: #999;
            position: relative;
            text-align: center;
            color: #999;
            position: relative;
            .text {
                color: #999;
            }
            .split {
                margin: auto 13px;
            }
            .copyright{
                white-space: nowrap;
                margin: 11px 0;
            }
            .police{

            }
        }
      }
    }
</style>