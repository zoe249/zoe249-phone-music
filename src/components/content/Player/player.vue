<template>
  <div class="player">
    <!-- 小播放器 -->
    <!-- <div class="player-small" > -->
      <audio-play 
      :audioInfo="audioInfo" 
      @playbigT="playbigT"
      @playanimationT="playanimationT"
      @playanimationF="playanimationF"
      @audioPalyer="audioPalyer"
      @timeupdate="timeupdate"
      ref="audioPlay"/>
      
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
          >
            <img  :src="audioInfo.cover" alt="" />
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
          </div>
        </div>
        <div class="playermain-btn">
          <!-- 进度条 -->
          <div class="player-view">
            <div class="view-current">{{currentTime}}</div>
            <!-- 进度条 -->
            <div class="view-bar"   @mousedown="currentMouse" ref="viewbar">
              <div ref="current"  class="bar-current"></div>
              <div class="view-mouse"></div>
            </div>
            <div class="view-duration"> {{duration}} </div>
          </div>

          <!-- 按钮控制 -->
          <div class="playing-btn">
            <!-- 播放模式 -->
            <div class="player-loop">
              <img v-if="loop" src="../../../assets/img/player/loop.png" alt="">
              <img v-else src="../../../assets/img/player/loopone.png" alt="">
            </div>
            <!-- 上一首 -->
            <div class="player-from">
              <img src="../../../assets/img/player/next.png" alt="">
            </div>
            <!-- 播放/暂停 -->
            <div class="player-play">
              <img @click="play" v-if="playing" src="../../../assets/img/player/player.png" alt="">
              <img @click="pause" v-else src="../../../assets/img/player/pause.png" alt="">
            </div>
            <!-- 下一首 -->
            <div class="player-next">
              <img src="../../../assets/img/player/next.png" alt="">
            </div>
            <!-- 播放列表 -->
            <div class="player-list">
              <img src="../../../assets/img/player/list.png" alt="">
            </div>
          </div>
        </div>
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
      playerBig: true,
      // 是否开启播放动画
      playanimation: false,
      // 是否列表循环
      loop:true,
      // 播放/暂停
      playing:true,
      // 当前播放时间
      currentTime:"00:00",
      // 总时间
      duration:"00:00",
      // 当前音乐播放百分比\
      percent:"",
      // 当前进度条宽度百分比
      percentX:"",
      // a:"0"
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
    },
    // 播放
    play(){
      this.playing = false
      this.$refs.audioPlay.play()
      this.duration = this.$refs.audioPlay.duration()
    },
    // 子组件的播放
    audioPalyer(duration){
      this.playing = false
      this.duration = duration
    },
    // 暂停
    pause(){
      this.playing = true
      this.$refs.audioPlay.pause()
    },
    // 当前播放时间
    timeupdate(currentTime,Tpercent){
      this.currentTime = currentTime
      this.$refs.current.style.width = Tpercent+"%"
      // let current = document.querySelector('.bar-current')
      // console.log(this.$refs.current.style.width)
      // console.log(this.$refs.viewbar.style.width)
    },
    // 点击改变播放位置
    currentMouse(){
      // 当前宽度
      // console.log(event)
      let currentX = event.clientX - this.$refs.current.getBoundingClientRect().left
      currentX = parseInt(currentX)
      // 获取总进度条的宽度
      let barW = document.querySelector('.view-bar').offsetWidth
      // 计算百分比
      this.percent = currentX / barW
      this.percentX =  (currentX / barW) *100
      // console.log(parseInt(this.percentX))
      // 改变当前current当前进度的宽度
      this.$refs.current.style.width = this.percentX+"%"
      this.$refs.audioPlay.timeCurrent(this.percent)
    },
   
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
  border: 2px solid rgb(245, 219, 171);
  box-sizing: border-box;
  width: 12.5rem;
  height: 12.5rem;
  opacity: 0;
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


.playermain-btn{
  position: absolute;
  bottom: 20px;
}

// 进度条视图
.playermain-btn .player-view{
 display: flex;
 width: 90vw;
 margin-left:5vw ;
 justify-content: space-between;
 align-items: center;
}
.player-view .view-current,.view-duration{
  font-size: 12px;
  color: #fff;
}
.player-view .view-bar{
  width: 65vw;
  height: 1px;
  background-color: #ccc;
  display: flex;
  align-items: center;
}

// 当前进度条
.view-bar .bar-current{
  height: 1px;
  width: 0px;
  background-color: #FBCC74;
}
// 拖动按钮
.view-bar .view-mouse{
  height: 0.5em;
  width: 0.5em;
  background-color: #FBCC74;
  border-radius: 50%;
}


// 按钮视图
.playermain-btn .playing-btn{
  margin-top: 20px;
  // bottom: 20px;
  display: flex;
  width: 80vw;
  margin-left: 10vw;
  // background-color: #000;
  // position: relative;
  // position: absolute;
  justify-content: space-between;
  align-items: center;
  height: 3em;
}

// 上一首
.player-from img{
  height: 1.5em;
  width: 1.5em;
  transform: rotate(180deg);
}

// 播放/暂停
.player-play{
  height: 2em;
  width: 2em;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;
}
.player-play img{
  height: 1em;
  width: 1em;
}

// 下一首
.player-next img{
  height: 1.5em;
  width: 1.5em;
}

// 播放列表
.player-list img{
  height: 1.5em;
  width: 1.5em;
}
</style>