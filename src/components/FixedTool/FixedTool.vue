<template>
  <div id="fixedTool" class="FixedTool" >
      <div class="fixedtool">
          <a  class="item"  v-for="(item,index) in nav" :key="index">
            <i class="icon" :class="item.icon"></i>
            <p class="text">{{item.text}}</p>
          </a>
          <a v-if="gotop" @click="goTop" class="item">
              <i class="icon icon-thetop" ></i>
            <p class="text">回到顶部</p>
              
          </a>
      </div>
  </div>
</template>

<script>

export default {
  name: 'FixedTool',
  data(){
    return{
        gotop:false,
        nav:[
            {text:'新人有礼',icon:'icon-gift',url:'',type:0,},
            {text:'在线客服',icon:'icon-erjikefu',url:'',type:1,}
        ]
    }
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods:{
      handleScroll(e) {
        let scrolltop = document.documentElement.scrollTop;
        this.gotop = scrolltop > 30 ? true : false;
      },
      goTop(i) {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                clearInterval(timeTop);
            }
            }, 10);
        
      }
  }
}
</script>

<style lang="scss">
    .FixedTool{
        .fixedtool{
            position: fixed;
            top: 200px;
            bottom: 200px;
            z-index: 99;
            right: 0;
            .item{
                box-sizing: border-box;
                display: block;
                width: 72px;
                height: 82px;
                background-color: #fff;
                color: #666;
                text-align: center;
                line-height: 1;
                cursor: pointer;
                padding-top: 14px;
                position: relative;
                &:before {
                    display: block;
                    left: 6px;
                    top: 0;
                    width: 60px;
                    content: '';
                    border-bottom: 1px solid #eaeaea;
                    position: absolute;
                    &:first-child{
                        border: none;
                    }
                }
                .icon{
                    font-size: 28px;
                    height: 29px;
                    width: 28px;
                }
                .text{
                    line-height: 20px;
                    font-size: 14px;
                    margin: 8px auto 0;
                    position: relative;
                }
            }
        }
    }
</style>