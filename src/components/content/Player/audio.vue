<template>
  <div 
    class="audio">
    <audio :loop="loop" 
    :src="audioInfo.url" 
    ref="audio" 
    @timeupdate="timeupdate"
    @ended="ended"></audio>
    <!-- src="http://m8.music.126.net/20210920094537/122aafa9da4dd6ef8b98d033b64e9acb/ymusic/025e/0208/5559/544a7156375b2bdb1cebb3987a81d29d.mp3" -->
    <div class="audio-main" @click="playbigT">
      <div class="audio-player-pic">
        <img :src="audioInfo.cover" alt="" />
      </div>
      <div class="audio-player-name">
        <div>{{ audioInfo.name }}</div>
        <div>{{ audioInfo.artist }}</div>
      </div>
      <div class="audio-palyer-btn">
        <img
          @click.stop="play"
          v-show="playing"
          src="../../../assets/img/player/player.png"
          alt=""
        />
        <img
          @click.stop="pause"
          v-show="!playing"
          src="../../../assets/img/player/pause.png"
          alt=""
        />
      </div>
      <div class="audio-player-list">
        <img src="../../../assets/img/player/list.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from "veux"
export default {
  props: {
    audioInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      playing: true,
      // 音乐总时间
      sDuration:"",
      // a:"0"
      loop:true
    };
  },
  computed: {
    refreshMusic() {
      return this.$store.state.audioInfo;
    },
  },
  watch: {
    refreshMusic() {
      this.refresh();
    },
  },
  created() {},
  methods: {
    playbigT() {
      this.$emit("playbigT");
    },
    refresh() {
      setTimeout(() => {
        this.play();
      }, 1000);

      // console.log(this.$refs.audio)
    },
    // 开始播放
    play() {
      this.$refs.audio.play();
      let duration = this.duration();
      this.$emit("playanimationT");
      this.$emit("audioPalyer", duration);
      this.playing = false;
    },
    // 停止播放
    pause() {
      this.$refs.audio.pause();
      this.$emit("playanimationF");
      this.playing = true;
    },
    // 音频总长度
    duration() {
      let duration = this.$refs.audio.duration;
      this.sDuration = this.$refs.audio.duration;
      // this.duration = duration
      return this.timeFormat(duration);
    },
    // 格式化音频总时间
    timeFormat(a) {
      let minute = parseInt(a / 60);
      let second = parseInt(a % 60);
      let duration = "";
      if (parseInt(a % 60) <= 9) {
        duration = "0" + minute + ":0" + second;
      } else {
        duration = "0" + minute + ":" + second;
      }

      return duration;
    },
    // 格式化当前播放时间
    currentFormat(time) {
      if (time >= 60) {
        let minute = parseInt(time / 60);
        let second = parseInt(time % 60);
        let duration = "";
        if (parseInt(time % 60) <= 9) {
          duration = "0" + minute + ":0" + second;
        } else {
          duration = "0" + minute + ":" + second;
        }
        return duration
      }else{
        let minute = 0
        let second = parseInt(time)
        let duration = ""
        if (parseInt(time % 60) <= 9) {
          duration = "0" + minute + ":0" + second;
        } else {
          duration = "0" + minute + ":" + second;
        }
        return duration
      }  
    },
    // 监听当前播放时间
    timeupdate() {
      let current = parseInt(this.$refs.audio.currentTime)
      // console.log(current)
      // console.log(parseInt(this.sDuration))
      let currentTime = this.currentFormat(this.$refs.audio.currentTime)
      // 计算当前时间占总时间的百分比
      let Tpercent = parseInt((current / this.sDuration)*100)
      // console.log(parseInt(Tpercent))
      this.$emit('timeupdate',currentTime,Tpercent)
    },
    // 改变播放位置
    timeCurrent(percentX){
      let tcurrent = parseInt(this.sDuration * percentX )
      this.$refs.audio.currentTime = tcurrent
    },
    // 改变播放模式为单曲循环
    loopTrue(){
      this.loop = true
    },
    // 改变播放模式为列表循环
    loopFalse(){
      this.loop = false
    },
    // 音频播放完毕
    ended(){
      this.$emit('audioEnded')
    },
  },
};
</script>

<style>
.audio {
  position: absolute;
  bottom: 49px;
  height: 3em;
  width: 100vw;
  /* background: floralwhite; */
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  /* z-index: 10; */
}

.audio-main {
  width: 94vw;
  height: 3em;
  margin-left: 3vw;
  display: flex;
  align-items: center;
  position: relative;
}

.audio-player-pic {
  height: 2em;
  width: 2em;
  /* border: 1px solid #fff; */
  border-radius: 50%;
}
.audio-player-pic img {
  height: 2em;
  width: 2em;
  /* border: 1px solid #fff; */
  border-radius: 50%;
}
.audio-player-name {
  display: flex;
  height: 3em;
  align-items: flex-end;
  margin-left: 0.5em;
  margin-bottom: 1em;
  width: 15em;
}
.audio-player-name div:first-child {
  color: #fff;
  font-size: 15px;
}
.audio-player-name div:nth-child(2) {
  color: #ccc;
  font-size: 12px;
  margin-left: 0.3em;
}

.audio-palyer-btn {
  border-radius: 50%;
  height: 2em;
  width: 2em;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.audio-palyer-btn img {
  height: 1em;
  width: 1em;
  /* border-radius: 50%; */
  /* text-align: center; */
}
.audio-player-list img {
  position: absolute;
  right: 0;
  bottom: 0.8em;
  height: 1.5em;
  width: 1.5em;
}
</style>