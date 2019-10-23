<template>
  <div >
    <MyHeader />
    <div class="indexRoot">
      <!-- 轮播图 -->
      <div class="indexFocsus">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swipetInfo" :key='index'>
              <a :href="item.url">
                <img :src="item.img" />
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </div>
      <!-- 品牌 -->
      <div class="manufacturer g-row">
        <div class="commonHeader">
          <div class="f-left lh1">
            <a href="" class="moreItems f-fz14">
              <h3 class="name">品牌制造商</h3>
            </a>
            <small class="frontName f-fz14">工厂直达消费者，剔除品牌溢价</small>
          </div>
          <div class="f-right lh1">
            <a href="" class="moreItems f-fz14">更多制造商 <span class="icon icon-right_s"></span></a>
          </div>
        </div>
        <div class="manufacturerList">
          <a href="" class="manufacturers large" :class="index >=2 ? 'small' : ''" v-for="(item,index) in manufacturerList" :key='index'>
            <div class="mask"></div>
            <div class="name">
              <span>{{item.name}}</span>
              <span class="newShelfTag" v-if="item.type">{{item.type}}</span>
            </div>
            <div class="price">{{item.price}}</div>
            <div class="" style="width:100%;height:100%;">
              <img class="img img-noBgPic img-lazyload j-lazyload img-lazyloaded" :src="item.img" alt="item.name">
            </div>
          </a>
        </div>
      </div>
      <!-- 新品 -->
      <div class="newProducts  g-row">
        <div class="commonHeader">
          <div class="f-left lh1">
            <a href="" class="moreItems f-fz14">
              <h3 class="name">新品首发</h3>
            </a>
            <small class="frontName f-fz14">工厂直达消费者，剔除品牌溢价</small>
          </div>
          <div class="f-right lh1">
            <router-link class="moreItems f-fz14" :to="'/detail'">
              更多新品 <span class="icon icon-right_s"></span>
            </router-link>
          </div>
        </div>
        <div class="itemList">
          <div class="newProduct product " v-for="(item,index) in manufacturerList" :key='index'>
            <div class="hd">
              <router-link  :to="'/detail?id='+item.id" class="imgWrap">
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
                <a href="">
                  <span>冻干卤肉饭 微波版 200克</span>
                </a>
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
    <!-- 底部 -->
    <MyFooter />
    
  </div>
</template>

<script>

import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import Swiper from "swiper";
export default {
  components: {  MyHeader, MyFooter },
  name: "home",
  data(){
    return {
      swipetInfo:[
        {url:'',img:'https://yanxuan.nosdn.127.net/7cdb5c3071e7db8ec16f43a96bfbe3b2.jpg?imageView&quality=95&thumbnail=1090x310'},
        {url:'',img:'https://yanxuan.nosdn.127.net/7cdb5c3071e7db8ec16f43a96bfbe3b2.jpg?imageView&quality=95&thumbnail=1090x310'},
        {url:'',img:'https://yanxuan.nosdn.127.net/7cdb5c3071e7db8ec16f43a96bfbe3b2.jpg?imageView&quality=95&thumbnail=1090x310'},
        {url:'',img:'https://yanxuan.nosdn.127.net/7cdb5c3071e7db8ec16f43a96bfbe3b2.jpg?imageView&quality=95&thumbnail=1090x310'},
      ],
      manufacturerList:[
        {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
        {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
        {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
        {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
      ]
    }
  },
  created:function(){
  },
  mounted() {
    new Swiper ('.swiper-container', {
          loop: true,        // 如果需要分页器       
          pagination: {
            el: '.swiper-pagination',
          },   
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',        // 如果需要滚动条        
    });

    
  },
  methods:{
    
  }
};
</script>

<style lang="scss">
  a:hover{
    color: #b4a078;
  }
  // 公用商品列表头
  .commonHeader{
        padding-bottom: 20px;
        height: 48px;
        .name{
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
          float: left;
          margin-right: 20px;
        }
        .frontName {
          padding-top: 13px;
          display: inline-block;
          line-height: 1;
       }
       .moreItems {
          display: inline-block;
          line-height: 1;
          padding-top: 14px;
          cursor: pointer;
        }
      }
  
  // 轮播
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
    .swiper-wrapper {
      height: 420px;
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
  // 品牌
  .manufacturer {
      margin-top: 30px;
      
      .manufacturerList{
        overflow: hidden;
        .manufacturers{
          z-index: 1;
          width: 356px;
          float: left;
          margin-left: 10px;
          overflow: hidden;
          position: relative;
          text-align: center;
          &:first-child{
            margin-left: 0;
          }
          &.large{
            height: 320px;
          }
          &:hover .img{
            transform: scale(1.05);
            transition: transform 1s;
          }
          &.small{
            height: 155px;
            .name {
              font-size: 20px;
              margin: 32px 0 10px 20px;
              text-align: left;
            }
            .price {
              padding-top: 10px;
              margin-left: 20px;
              float: left;
            }
            &:last-child{
              margin-top: 10px;
            }
          }
          .mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
          }
          .name{
            font-size: 24px;
            margin: 48px 0 19px;
            line-height: 1;
            border-right: 0;
            border-left: 0;
            position: relative;
            z-index: 3;
            color: #666;
            .newShelfTag {
              position: absolute;
              top: -3px;
              font-size: 11px;
              margin-left: 2px;
              text-align: center;
              line-height: 19px;
              width: 32px;
              height: 21px;
              color: #fff;
              background: url(//yanxuan.nosdn.127.net/18ccda99a6f55ef573b3fb098b4d01b8.png) center no-repeat;
            }
          }
          .price {
            font-size: 14px;
            padding-top: 17px;
            display: inline-block;
            width: auto;
            border-top: 1px solid #666;
            position: relative;
            z-index: 3;
            color: #666;
          }
          .img {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            text-align: center;
            -webkit-transition: -webkit-transform 1s;
            -moz-transition: -moz-transform 1s;
            -o-transition: -o-transform 1s;
            transition: transform 1s;
            z-index: 1;
          }
        }
      }
  }
  // 新品
  .newProducts {
    height: 510px;
    padding-top: 60px;

    .itemList{
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
  }
</style>
