<template>
    <div class="recom">
        <div class="slickHead">
          <h3 class="title">猜你喜欢</h3>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper ">
            <div class="swiper-slide " v-for="(itema,indexa) in manufacturerList" :key='indexa'>
              <div class="itemList">
                <div class="newProduct product " v-for="(item,index) in itema" :key='index'>
                  <div class="hd">
                    <router-link class="imgWrap" :to="'/detail?id='+item.id">
                      <div style="width:100%;height:100%;">
                        <img class="img  img-lazyload img-lazyloaded" src="https://yanxuan-item.nosdn.127.net/ef68b8e6c017ec145e14c10804337f91.png?type=webp&quality=95&thumbnail=265x265&imageView" alt="">
                      </div>
                      <div class="promBanner">
                        <div class="promTitle">
                          <div class="title">
                            <span>新品尝鲜价</span>
                          </div>
                          <div class="subTitle">
                            <span>
                              14.5
                              <span class="qi">起</span>
                            </span>
                          </div>
                          
                        </div>
                        <div class="promContent">
                          限1900件 仅剩5天
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="bd">
                    <div class="prdtTags">
                      <span class="itemTag">新品尝鲜价</span>
                    </div>
                    <h4 class="name">
                      <router-link class="imgWrap" :to="'/detail?id='+item.id">
                        <span>冻干卤肉饭 微波版 200克</span>
                      </router-link>
                    </h4>
                    <p class="price">
                      <span class="retailPrice">
                        <span>￥</span>
                        <span>14.9</span>
                      </span>
                      <span class="counterPrice">
                        <span>￥</span>
                        <span>14.9</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    data(){
        return{
          manufacturerList:[
            [
              {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
              {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
              {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
              {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
            ],
            [
              {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
              {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
              {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
              {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
            ],
          ]
        }
    },
    mounted() {
        new Swiper ('.swiper-container', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',        // 如果需要滚动条        
        });

        
    },
}

</script>

<style lang="scss" scoped>
.recom{
    width: 1090px;
    flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
}
    // 轮播
  .swiper-container {
    width: 1090px;
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    .swiper-wrapper {
      height: 380px;
      a,img{
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
    .swiper-slide {
      text-align: center;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
  .slickHead{
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    .title{
      padding-left: 22px;
      line-height: 44px;
      font-size: 17px;
      height: 44px
    }
  }
  .itemList{
    display: flex;
      .newProduct{
        width: 265px;
        margin-right: 10px;
        &:last-child{
          margin-right: 0;
        }
        &:hover {
          -webkit-box-shadow: 1px 1px 8px rgba(0,0,0,.2);
          -moz-box-shadow: 1px 1px 8px rgba(0,0,0,.2);
          box-shadow: 1px 1px 8px rgba(0,0,0,.2);
          background-color: #f4f0ea;
        }
        .hd{
          background-color: #f4f4f4;
          position: relative;
          margin-bottom: 8px;
          overflow: hidden;
        }
        .img{
          width: 265px;
          height: 265px;
        }
        .promBanner {
          text-align: left;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background-repeat: no-repeat;
          padding-right: 10px;
          .promTitle {
            background-color: #999;
            max-width: 200px;
            height: 36px;
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: right;
            margin-top: -6px;
            z-index: 1;
            padding-left: 8px;
            padding-right: 14px;
            float: left;
            border-top-left-radius: 3px;
            .title {
              font-size: 12px;
              height: 15px;
              margin-top: 5px;
              margin-left: 0;
              padding-top: 0;
              text-align: center;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .subTitle {
              font-size: 14px;
              height: 20px;
              line-height: 14px;
              margin-top: 0;
              font-weight: 700;
              text-align: center;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .qi {
                font-weight: 400;
                font-size: 12px;
                vertical-align: top;
                margin-top: -1px;
                display: inline-block;
              }
            }
          }
          .promContent{
              background-color: #f38245;
              color: #fff;
              text-align: left;
              overflow: hidden;
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-left: 4px;
              padding-left: 4px;
            }
        }
        .bd{

        }
        
      }
      .product {
        float: left;
          line-height: 1;
          text-align: center;
          font-size: 13px;
          height: 361px;
          position: relative;
          .prdtTags {
            height: 20px;
            font-size: 0;
            color: #fff;
            width: 200px;
            margin: 0 auto 3px;
            overflow: hidden;
            .itemTag{
              display: inline-block;
              height: 20px;
              line-height: 20px;
              color: #fff;
              padding: 0 5px;
              font-size: 12px;
              background-color: #e36844;
              &:first-child {
                margin-left: 0;
              }
            }
          }
          .name {
            margin-bottom: 4px;
            height: 20px;
            line-height: 20px;
          }
          h4.name{padding: 0 10px;}
          .price {
            padding: 1px 0 9px;
            font-size: 13px;
            line-height: 13px;
            color: #d4282d;
            margin: 0;
            .retailPrice{
              position: relative;
              top: 1px;
            }
            .counterPrice {
              font-size: 12px;
              color: #999;
              top: 2px;
            }
            span {
              line-height: 13px;
              height: 13px;
              padding: 0;
            }
          }
        }
    }

</style>