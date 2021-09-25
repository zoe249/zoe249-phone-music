<template>
  <div class="player">
    <!-- 小播放器 -->
    <!-- <div class="player-small" > -->
    <audio-play
      :audioInfo="audioInfoP"
      @playbigT="playbigT"
      @playanimationT="playanimationT"
      @playanimationF="playanimationF"
      @audioPalyer="audioPalyer"
      @timeupdate="timeupdate"
      @audioEnded="audioEnded"
      ref="audioPlay"
    />

    <!-- </div> -->

    <!-- 播放器主页 -->
    <div v-show="playerBig" class="player-big">
      <div class="big-pic">
        <img :src="audioInfoP.cover" alt="" />
      </div>
      <div class="big-main">
        <div class="playermain-name">
          <img
            src="../../../assets/img/player/small.png"
            @click="playerBigF"
            alt=""
          />
          <div>{{ audioInfoP.name }}</div>
        </div>

        <!-- 旋转碟片 -->
        <div class="playermain-pic">
          <div :class="{ animActive: playanimation }" class="player-rote">
            <img :src="audioInfoP.cover" alt="" />
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
          </div>
        </div>

        <!-- 按钮部分 -->
        <div class="playermain-btn">
          <!-- 进度条 -->
          <div class="player-view">
            <div class="view-current">{{ currentTime }}</div>
            <!-- 进度条 -->
            <div class="view-bar" @mousedown="currentMouse" ref="viewbar">
              <div class="bar-current" ref="current"></div>
              <div class="view-mouse"></div>
            </div>
            <div class="view-duration">{{ duration }}</div>
          </div>

          <!-- 按钮控制 -->
          <div class="playing-btn">
            <!-- 播放模式 -->
            <div class="player-loop" @click="playLoop">
              <img
                v-if="loop"
                src="../../../assets/img/player/loopone.png"
                alt=""
              />
              <img v-else src="../../../assets/img/player/loop.png" alt="" />
            </div>
            <!-- 上一首 -->
            <div class="player-from" @click="playFrom">
              <img src="../../../assets/img/player/next.png" alt="" />
            </div>
            <!-- 播放/暂停 -->
            <div class="player-play">
              <img
                @click="play"
                v-if="playing"
                src="../../../assets/img/player/player.png"
                alt=""
              />
              <img
                @click="pause"
                v-else
                src="../../../assets/img/player/pause.png"
                alt=""
              />
            </div>
            <!-- 下一首 -->
            <div class="player-next" @click="playNext">
              <img src="../../../assets/img/player/next.png" alt="" />
            </div>
            <!-- 播放列表 -->
            <div class="player-list" @click="playlistT">
              <img src="../../../assets/img/player/list.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 播放列表 -->
    <div class="playing-list" v-show="playinglist">
      <!-- 隐藏搜索列表 -->
      <div class="playing-false">
        <img
          src="../../../assets/img/player/small.png"
          @click="playlistF"
          alt=""
        />
        <img src="../../../assets/img/player/delete.png" alt="" />
      </div>

      <!-- 播放列表内容 -->
      <div class="playing-content">
        <b-scroll ref="scroll" class="play-scroll">
          <div
            class="playing-item"
            v-for="(item, index) in audioInfo"
            :key="index"
            @click="listClick(item,index)"
          >
            <div class="item-name">
              <div>{{ item.name }}</div>
              <div>{{ item.artist }}</div>
            </div>
            <div class="item-delete" @click.stop="deleteItem(index)">
              <img src="../../../assets/img/player/X.png" alt="" />
            </div>
          </div>
        </b-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "../../comment/better-scroll/BetterScroll.vue";
import AudioPlay from "./audio.vue";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      // 是否显示播放页面
      playerBig: false,
      // 是否开启播放动画
      playanimation: false,
      // 是否列表循环
      loop: true,
      // 播放/暂停
      playing: true,
      // 当前播放时间
      currentTime: "00:00",
      // 总时间
      duration: "00:00",
      // 距离左边距宽度
      barLeft: "",
      // 当前音乐播放百分比\
      percent: "",
      // 当前进度条宽度百分比
      percentX: "",
      // 滑动距离
      vMouseX: "",

      // 显示播放列表
      playinglist: false,
      // 音乐数据
      audioInfoP:{},
      // 播放位置
      playIndex:null
    };
  },
  computed: {
    ...mapState(["audioInfo"]),
    ...mapGetters(['saveInfo'])
  },
  watch:{
    audioInfo(){
      this.addAdudio()
    },
    saveInfo(){
      this.Bsrefresh()
    }
  },
  mounted () {
    this.addAdudio()
    this.playIndex = 0
  },
  methods: {
    // 旋转动画
    rotateC() {
      this.playanimation = true;
    },
    // 获取音乐数据
    addAdudio(){
      this.audioInfoP = this.audioInfo[0]
    },
    // 隐藏播放页面
    playerBigF() {
      this.playerBig = false;
    },
    // 显示播放页面
    playbigT() {
      this.playerBig = true;
    },
    // 开始播放动画
    playanimationT() {
      this.playanimation = true;
    },
    // 停止播放动画
    playanimationF() {
      this.playanimation = false;
    },
    // 播放
    play() {
      this.$refs.scroll.refresh()
      this.playing = false;
      this.$refs.audioPlay.play();
      this.duration = this.$refs.audioPlay.duration();
    },
    // 子组件的播放
    audioPalyer(duration) {
      this.playing = false;
      this.duration = duration;
    },
    // 暂停
    pause() {
      this.playing = true;
      this.$refs.audioPlay.pause();
    },
    // 播放结束
    audioEnded() {
      // this.playanimation = false;
      this.playNext()
    },
    // 当前播放时间
    timeupdate(currentTime, Tpercent) {
      this.currentTime = currentTime;
      this.$refs.current.style.width = Tpercent + "%";
      // let current = document.querySelector('.bar-current')
      // console.log(this.$refs.current.style.width)
      // console.log(this.$refs.viewbar.style.width)
    },
    // 点击改变播放位置
    currentMouse() {
      // 当前宽度
      // console.log(event)
      this.barLeft =
        event.clientX - this.$refs.current.getBoundingClientRect().left;
      // console.log(this.barLeft)
      let currentX = parseInt(this.barLeft);
      // 获取总进度条的宽度
      let barW = document.querySelector(".view-bar").offsetWidth;
      // 计算百分比
      this.percent = currentX / barW;
      this.percentX = (currentX / barW) * 100;
      // console.log(parseInt(this.percentX))
      // 改变当前current当前进度的宽度
      this.$refs.current.style.width = this.percentX + "%";
      this.$refs.audioPlay.timeCurrent(this.percent);
    },
    // 播放模式
    playLoop() {
      this.loop = !this.loop;
      if (this.loop === true) {
        this.$refs.audioPlay.loopTrue();
      } else {
        this.$refs.audioPlay.loopFalse();
      }
    },
    // 显示播放列表
    playlistT() {
      this.playinglist = true;
    },
    // 点击切换播放音乐
    listClick(item,index){
      this.audioInfoP = item
      this.playIndex = index
      setTimeout(()=>{
        this.play()
      },500)
      
    },
    // 上一首
    playFrom(){
      if(this.playIndex !==0){
        this.playIndex--
        this.audioInfoP = this.audioInfo[this.playIndex]
        setTimeout(()=>{
          this.play()
        },500)
      }
    },
    // 下一首
    playNext(){
      
      if(this.playIndex !== this.audioInfo.length-1){
        this.playIndex++
        this.audioInfoP = this.audioInfo[this.playIndex]
        setTimeout(()=>{
          this.play()
        },500)
      }else if(this.playIndex === this.audioInfo.length-1){
        this.pause()
      }
    },
    // 隐藏播放列表
    playlistF() {
      this.playinglist = false;
    },
    // 刷新高度
    Bsrefresh(){
      this.$refs.scroll.refresh()
    },
    // 删除音乐
    deleteItem(index){
      this.$store.commit('deleteMusic',index)
    },


    // 注释:左右滑动会与手机端的左右滑动返回功能冲突，不采用
    // @touchstart.stop="btnDown" @touchmove.stop="btnMove" @touchend.stop="btnUp"
    btnDown() {
      // console.log(event.targetTouches[0].clientX)
    },
    btnMove() {
      // 获取滑动的位置
      this.vMouseX = event.targetTouches[0].clientX;
      // 滑动结束占bar组件的宽度百分比
      let barW = document.querySelector(".view-bar").offsetWidth;
      let mouseW =
        this.vMouseX - this.$refs.current.getBoundingClientRect().left;
      // 计算百分比
      this.percent = mouseW / barW;
      this.percentX = parseInt((mouseW / barW) * 100);
      // 改变viewcurent宽度
      this.$refs.current.style.width = this.percentX + "%";
    },
    btnUp() {
      this.$refs.audioPlay.timeCurrent(this.percent);
      // console.log(this.percentX)
      // console.log(mousePer)
    },
  },
  components: {
    AudioPlay,
    BScroll,
  },
};
</script>

<style lang="less">
.player {
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
.playermain-name img {
  height: 2rem;
  width: 2rem;
}
.playermain-name div {
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

.playermain-btn {
  position: absolute;
  bottom: 20px;
}

// 进度条视图
.playermain-btn .player-view {
  display: flex;
  width: 90vw;
  margin-left: 5vw;
  justify-content: space-between;
  align-items: center;
}
.player-view .view-current,
.view-duration {
  font-size: 12px;
  color: #fff;
}
.player-view .view-bar {
  width: 65vw;
  height: 1px;
  background-color: #ccc;
  display: flex;
  align-items: center;
}

// 当前进度条
.view-bar .bar-current {
  height: 1px;
  width: 0px;
  background-color: #fbcc74;
}
// 拖动按钮
.view-bar .view-mouse {
  height: 0.5em;
  width: 0.5em;
  background-color: #fbcc74;
  border-radius: 50%;
}

// 按钮视图
.playermain-btn .playing-btn {
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
.player-from img {
  height: 1.5em;
  width: 1.5em;
  transform: rotate(180deg);
}

// 播放/暂停
.player-play {
  height: 2em;
  width: 2em;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;
}
.player-play img {
  height: 1em;
  width: 1em;
}

// 下一首
.player-next img {
  height: 1.5em;
  width: 1.5em;
}

// 播放列表
.player-list img {
  height: 1.5em;
  width: 1.5em;
}

// 播放列表区域
.playing-list {
  position: absolute;
  bottom: 0;
  left: 3vw;
  border-radius: 15px;
  height: 60vh;
  width: 94vw;
  background-color: rgb(29, 13, 9);
  z-index: 132;
}
.playing-list .playing-false {
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
}
.playing-list .playing-false img {
  height: 1.5em;
  width: 1.5em;
}

// 滑动

.play-scroll {
  height: calc(60vh - 4.5em);
  overflow: hidden;
}
.playing-list .playing-content {
  margin-top: 1em;
  margin-left: 3vw;
  margin-right: 3vw;
}

.playing-content .playing-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
}
.playing-item .item-name {
  display: flex;
  align-items: flex-end;
}
.playing-item .item-name div:first-child {
  color: #ccc;
}
.playing-item .item-name div:nth-child(2) {
  margin-left: 3vw;
  font-size: 12px;
}
.playing-item .item-delete img {
  height: 1em;
  width: 1em;
}
</style>