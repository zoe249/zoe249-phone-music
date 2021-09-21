<template>
  <div class="player">
    <!-- 小播放器 -->
    <!-- <div class="player-small" > -->
      <audio-play 
      :audioInfo="audioInfo" 
      @playbigT="playbigT"
      @playanimationT="playanimationT"
      @playanimationF="playanimationF"/>
      
    <!-- </div> -->

    <!-- 播放器主页 -->
    <div v-show="playerBig" class="player-big">
      <div class="big-pic">
        <img :src="audioInfo.cover" alt="" />
      </div>
      <div class="big-main">
        <div class="playermain-name">
          <img  src="../../../assets/img/player/small.png" @click="playerBigF" alt="" >
          <div>{{audioInfo.name}}</div>
        </div>

        <!-- 旋转碟片 -->
        <div class="playermain-pic">
          <div
            :class="{ animActive: playanimation }"
            class="player-rote"
            @click="rotateC"
          >
            <img  :src="audioInfo.cover" alt="" />
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
          </div>
        </div>
        <div class="playermain-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlay from './audio.vue' 
import {mapState,mapGetters} from 'vuex'
export default {
  data() {
    return {
      // 是否显示播放页面
      playerBig: false,
      // 是否开启播放动画
      playanimation: false,
    };
  },
  computed:{
    ...mapState(['audioInfo']),
    
  },
  methods: {
    rotateC() {
      this.playanimation = true
    },
    // 隐藏播放页面
    playerBigF(){
      this.playerBig = false
    },
    // 显示播放页面
    playbigT(){
      this.playerBig = true
    },
    // 开始播放动画
    playanimationT(){
      this.playanimation = true
    },
    // 停止播放动画
    playanimationF(){
      this.playanimation = false
    }
  },
  components:{
    AudioPlay
  }
};
</script>

<style lang="less">
.player{
  // position: fixed;
  z-index: 10;
}


.player-big {
  position: absolute;
  bottom: 0;
  z-index: 121;
  height: 100vh;
  width: 100vw;
  right: 0;
  left: 0;
  top: 0;
  /* background-color: aliceblue; */
}
.big-pic img {
  height: 100vh;
  width: 100vw;
}

.player-big .big-main {
  position: absolute;
  height: 100vh;
  width: 100vw;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 123;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(60px);
}

// 内容
.playermain-name {
  color: #fff;
  width: 94vw;
  height: 2em;
  line-height: 2em;
  margin-left: 3vw;
  font-size: 18px;
  font-weight: 800;
  display: flex;
}
.playermain-name img{
  height: 2rem;
  width: 2rem;

}
.playermain-name div{
  margin-left: 1em;
  width: 75vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}


// 旋转碟片
.playermain-pic {
  position: relative;
  margin-top: 5em;
  height: 100vw;
}
.player-rote {
  position: relative;
  margin: 0 auto;
  width: 10em;
  margin-top: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-rote img {
  margin-top: 15em;
  position: absolute;
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
}
.animActive img {
  animation: play 20s linear infinite;
}
.animActive span {
  animation: playspan 3.2s linear infinite;
  animation-delay: calc(0.8s * var(--i));
}
.player-rote span {
  margin-top: 15em;
  position: absolute;
  border: 2px solid rgb(182, 232, 255);
  box-sizing: border-box;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
}

@keyframes play {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes playspan {
  0% {
    width: 13rem;
    height: 13rem;
    opacity: 1;
  }
  50% {
    width: 18rem;
    height: 18rem;
    opacity: 0.5;
  }
  100% {
    width: 23rem;
    height: 23rem;
    opacity: 0;
  }
}
</style>