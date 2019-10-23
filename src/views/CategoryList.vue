<template>
  <div>
    <MyHeader />
      <div class="CategoryList">
        <div class="row">
          <div class="m-Level2Category" v-for="(itema,indexa) in manufacturerList" :key='indexa'>
              <div class="hd">
                  <p class="title">
                      <span class="name">{{itema.title}}</span>
                  </p>
              </div>
              <div class="itemList">
                <div class="newProduct product " v-for="(item,index) in itema.list" :key='index'>
                    <div class="hd">
                    <router-link  :to="'/detail?id='+item.id" class="imgWrap">
                        <div style="width:100%;height:100%;">
                            <img class="img  img-lazyload img-lazyloaded" src="https://yanxuan-item.nosdn.127.net/ef68b8e6c017ec145e14c10804337f91.png?type=webp&quality=95&thumbnail=265x265&imageView" alt="">
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
      </div>
    <MyFooter />
  </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
export default{
  components: {  MyHeader, MyFooter },
    name:"categoryList",
    data(){
        return{
             manufacturerList:[
                 {title:'秋季美食',list:[
                     {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
                    {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
                    {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                    {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                 ]},
                 {title:'新品首发',list:[
                     {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
                    {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
                    {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                    {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                 ]},
                
            ]
        }
    },
    created(){
        
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    .CategoryList{
        .m-Level2Category{
            padding-top: 30px;
            .hd {
                text-align: center;
                line-height: 1;
                margin-bottom: 40px;
                .title{
                    display: inline-block;
                    margin-bottom: 10px;
                    .name{
                        font-size: 24px;
                        font-weight: 700;
                        line-height: 44px;
                    }
                }
            }
            .itemList{
                margin-top: 25px;
                margin-right: -10px;
                display: flex;
                .item{
                    margin-right: 10px;
                    margin-bottom: 50px;
                    .product{
                        position: relative;
                        line-height: 1;
                        text-align: center;
                        font-size: 13px;
                        width: 245px;
                        height: 381px;
                    }
                }
            }
        }
    }

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
</style>

