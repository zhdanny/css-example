<template>
  <div class="colors">
    <div class="color-wrap">
      <div 
        v-for="(item, index) in menuColors" 
        :key="`menu${index}`"
        class="color-wrap-rgb"
        :style="`background: ${item.rgb};`" 
        :class="{'color-wrap-rgb-active': index === activeColor}"
        @click="menuTab(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div 
      v-for="(item, index) in colors" 
      :key="index"
    >
      <transition  
        name="fade" 
        mode="out-in" 
        appear
      >
        <div 
          v-if="index === activeColor" 
          class="color-content"
        >
          <div
            v-for="(val, i) in item.colors" 
            :key="i" 
            class="color-li" 
            @click="doCopy(val.rgb)"
          >
            <div 
              class="color-li-rgb" 
              :style="`background: ${val.rgb};`"
            ></div>
            <span class="color-li-title">
              {{ val.name }} {{ val.rgb }}
            </span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { colors, menuColors } from '../config/index'
export default {
  name: "Colors",
  data (){
    return {
      colors, 
      menuColors,
      activeColor: 0
    }
  },
  created(){
    this.arr()
  },
  methods: {
    doCopy (text) {
      this.$copyText(text).then(()=> {
        this.$Message.success(`${text} 复制成功!`);
      }, ()=> {
        this.$Message.error(`复制失败!`);
      })
    },
    menuTab(index){
      this.activeColor = index
    },
    arr(){
      let a = this.colors.map(item=>{
        let c = []
        c = item.colors.map(val=>{
          return {
            name: val.name,
            rgb: val.rgb.toLocaleUpperCase()
          }
        })
        return {
          name: item.name,
          rgb: item.rgb.toLocaleUpperCase(),
          colors: c
        }
      })
      console.log('a',JSON.stringify(a));
    }
  }
}
</script>

<style lang="scss" scoped>
.colors{
  padding: 120px 40px;
  cursor: pointer;
}
.color-wrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  // height: 100px;
  background: #fff;
  padding: 40px 60px 20px;
  &-title{
    color: 16px;
    color: #333;
    font-weight: 800;
    width: 100px;
  }
  &-rgb{
    display: inline-block;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    transition: all 0.6s ease 0s;
    box-shadow: #948f8f 0px 0px 10px;
    z-index: 1;
    position: relative;
    color: #fff;
    color: 16px;
    font-weight: 800;

  }
  &-rgb-active{
    transform: translateY(-25px);
    z-index: 10;
  }
}
.color-content{
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  align-items: center;
  .color-li{
    flex: 1;
    // flex: 130px;
    max-width: 130px;
    min-width: 130px;
    text-align: center;
    &-title{
      color: 12px;
      color: #999;
    }
    &-rgb{
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin: 10px auto;
    }
  }
}

</style>