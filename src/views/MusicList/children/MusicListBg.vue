<template>
  <div class="music-list-bg">
    <div class="bg">
      <img :src="musiclist.coverImgUrl" alt="" />
    </div>
    <div class="bg-color"></div>
    <div class="main">
        <!-- 顶部图片 -->
      <div class="mainpic-top">
        <div class="mainpic-top-img">
          <img :src="musiclist.coverImgUrl" alt="" />
        </div>

        <div class="mainpic-top-text">
          {{ musiclist.name }}
        </div>
      </div>

      <!-- 下方标签文字 -->
      <div class="mainpic-text">
          <div class="mainpic-text-label">
              <div>标签：</div>
              <span v-for="(item,index) in musiclist.tags" :key="index">{{item}}</span>
          </div>

          <div class="mainpic-text-title">
              {{musiclist.description}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    musiclist: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
  },
};
</script>

<style lang="less">
.music-list-bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
}
.bg img {
  height: 100vh;
  width: 100vw;
}

.bg-color {
  top: 0;
  z-index: 22;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(60px);
}
.main {
  position: absolute;
  top: 0;
  z-index: 23;
}
.main .mainpic-top {
  
  width: 100vw;
  height: 45vh;
}
.main .mainpic-top .mainpic-top-img {
    position: relative;
  height: 14em;
  width: 14em;
  left: 50vw;
  transform: translate(-50%);
  margin-top: 3em;
}
.main .mainpic-top .mainpic-top-img img {
  height: 14em;
  width: 14em;
  border-radius: 1em;
}
.mainpic-top-text{
    margin-top: 1em;
    text-align: center;
    color: #fff;
}


.mainpic-text{
    width: 84vw;
    margin-left: 8vw;
    color: #fff;
    line-height: 2em;
}
.mainpic-text-label{
    display: flex;
    align-items: center;
}
.mainpic-text-label span{
    font-size: 1em;
    margin: 0 .5em;
    width: 2.5em;
    height: 1.3em;
    background: rgba(255, 255, 255, .2);
    border-radius: 0.7em;
    text-align: center;
    line-height: 1.3em;
}
.mainpic-text-title{
    margin-top: 1em;
    font-size: .8em;
}
</style>