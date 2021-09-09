<template>
  <div class="home-dragon-main">
    <b-scroll-x class="dragon-content" ref="scroll">
      <div class="home-dragon" ref="aaa">
        <!-- 内容 -->
        <div class="dragon-item" v-for="(item, index) in Dragon" :key="index">
          <div class="dragon-item-img">
            <img :src="item.iconUrl" alt="" />
          </div>
          <div class="dragon-item-text">
            {{ item.name }}
          </div>
          <!-- 颜色 -->
          <div class="dragon-item-color"></div>
        </div>
      </div>
    </b-scroll-x>
  </div>
</template>

<script>
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  props: {
    Dragon: {
      type: Array,
      default() {
        return [];
      },
    },
    
    
  },
  watch: {
    Dragon(){
      
    }
  },
  mounted () {
    setTimeout(()=>{
      this.$refs.scroll.refresh()
    },1000)
  },
  methods: {
    
  },
  components: {
    BScrollX,
  },
};
</script>

<style lang="less" scoped>
// 圆形图标
.home-dragon-main {
  white-space: nowrap;
  height: 95px;
  overflow: hidden;
}
.dragon-content {
  margin-top: 20px;
  display: inline-block;
  height: 70px;
  width: 100%;
  overflow: hidden;
}
.home-dragon {
  // width: 100%;
  // margin-top: 20px;
  display: flex;
  overflow: hidden;
  text-align: center;
}
.dragon-item {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  // color: red;
  text-align: center;
}
.dragon-item .dragon-item-img {
  height: 50px;
  width: 50px;
  text-align: center;
  img {
    height: 45px;
    width: 45px;
  }
}
.dragon-item .dragon-item-text {
  margin-top: 8px;
  color: #fff;
  font-size: 8px;
}
// 颜色
.dragon-item .dragon-item-color {
  position: absolute;
  height: 50px;
  width: 50px;
  overflow: hidden;
  background-color: rgba(255, 0, 0, 0.3);
  border-radius: 50%;
}
</style>