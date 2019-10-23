<template>
    <div class="page-bar" onselectstart="return false">
        <ul>
            <li class="prev" :class="cur==1 ? 'no' : ''"><a @click="btnClick(cur-1,'prev')"><span class="text">上一页</span>   </a></li>
            <li v-for="(index,item) in indexs" :key='item'  :class=" cur == index ? 'active' : ''">
                <a v-on:click="btnClick(index)">{{ index }}</a>
            </li>
            <li class="next" :class="cur==all ? 'no' : ''" ><a @click="btnClick(cur+1,'next')"><span class="text">下一页</span></a></li>
            <!-- <li><a>共<i>{{all}}</i>页</a></li> -->
        </ul>
    </div>
</template>

<script>
export default {
    name:'vue-page',
    props: {
      cur: {
        type: [String, Number],
        required: true
      },
      all: {
        type: [String, Number],
        required: true
      },
      callback: {
        default() {
          return function callback() {
            // todo
          }
        }
      }
    },
    computed: {
      indexs() {
        var left = 1
        var right = this.all
        var ar = [] 
        if (this.all >= 11) {
          if (this.cur > 5 && this.cur < this.all - 4) {
            left = this.cur - 5
            right = this.cur + 4
          } else {
            if (this.cur <= 5) {
              left = 1
              right = 10
            } else {
              right = this.all
              left = this.all -9
            }
          }
        }
        while (left <= right) {
          ar.push(left)
          left ++
        }   
        return ar
      }
    },
    methods: {
      btnClick(page,text) {
        if(text == 'prev' && this.cur == 1 || text == 'next' && this.cur == this.all){
            return
        }
        if (page != this.cur) {
          this.callback(page)
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    .page-bar{
        padding: 20px 0;
        ul{
            display:flex;
            li{
                width: 30px;
                height: 30px;
                box-sizing: border-box;
                text-align: center;
                line-height: 30px;
                border: 1px solid #999;
                margin-left: 2px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon{
                    font-size: 18px;
                }
                .text{}
                &.prev{
                    width: 100px;
                }
                &.next{
                    width: 100px;
                }
                &.active{
                    background-color: #c0ae8a;
                    border-color: #b4a078;
                    a{
                        color: #fff;
                    }
                }
                &.no {
                    cursor: no-drop;
                    border: 1px solid #e6e6e6;
                    a{
                        color: #ccc;
                    }
                }
                a{
                    width: 100%;
                    height:100%;
                    display: block;
                }
            }
        }
    }
</style>

