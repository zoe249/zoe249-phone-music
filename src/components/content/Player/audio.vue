<template>
  <div class="audio">
    <audio
     :src="audioInfo.url"
     ref="audio"
    ></audio>
 <!-- src="http://m8.music.126.net/20210920094537/122aafa9da4dd6ef8b98d033b64e9acb/ymusic/025e/0208/5559/544a7156375b2bdb1cebb3987a81d29d.mp3" -->
    <div class="audio-main" @click="playbigT">
      <div class="audio-player-pic">
        <img :src="audioInfo.cover" alt="" />
      </div>

      <div class="audio-player-name">
        <div>{{audioInfo.name}}</div>
        <div>{{audioInfo.artist}}</div>
      </div>
      <div class="audio-palyer-btn">
        <img @click.stop="play" v-show="playing" src="../../../assets/img/player/player.png" alt="" />
        <img @click.stop="pause" v-show="!playing" src="../../../assets/img/player/pause.png" alt="" />
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
  props:{
    audioInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
    data () {
        return {
            playing:true
        }
    },
    computed:{
      refreshMusic(){
        return this.$store.state.audioInfo
      }
    },
    watch:{
      refreshMusic(){
        this.refresh()
      }
    },
    methods: {
        playbigT(){
            this.$emit('playbigT')            
        },
        refresh(){
          setTimeout(()=>{
            this.play()
          },1000)
          
          console.log(this.$refs.audio)
        },
        // 开始播放
        play(){
          this.$refs.audio.play()
          this.$emit('playanimationT')
          this.playing = false
          // this.refresh()
          console.log(this.$refs.audio)
        },
        // 停止播放
        pause(){
          this.$refs.audio.pause()
          this.$emit('playanimationF')
          this.playing = true
        },

    }
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

.audio-player-pic{
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