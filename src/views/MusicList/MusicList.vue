<template>
  <div class="music-list-main">
    <div class="muslis-top" :class="{mustopActive:topShow}">
      <span>歌单</span>
    </div> 
    <!-- 返回按钮 -->
    <div class="top-back" @click="musicback">
      <img src="../../assets/img/main/back.png" alt="" />
    </div>

    <!-- 主要内容 -->
    <b-scroll 
    class="music-list-content"
    ref="scroll"
    @scroll="contentScroll"
    >
      <!-- 顶部歌单信息 -->
      <list-top 
      @musicBigShow="musicBigShow"
      :musiclist="musiclist" 
      :musicauthor="musicauthor"/>

      <!-- 歌单歌曲列表 -->
      <list-song :musicsong="musicsong"/>
    </b-scroll>

    <!-- 显示大图片 -->
    <list-music-bg 
    :musiclist="musiclist"
    @click.native="musicBigHide" 
    v-if="bigPicShow"/>

  </div>
</template>

<script>
import { playListGet } from "@/network/Get/MusicList";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue"
import ListTop from "./children/MusicListTop.vue"
import ListSong from "./children/MusicListSong.vue"
import ListMusicBg from "./children/MusicListBg.vue"
export default {
  data() {
    return {
      topShow: true,
      musiclistId: "",
      //   图片信息
      musiclist: {},
      // 歌单作者
      musicauthor:{},
      // 歌单列表
      musicsong:[],
      // 查看大图
      bigPicShow:false
    };
  },
  created() {
    this.musiclistId = this.$route.query.id;
    this.playListGet();
  },
  methods: {
    saveCookie() {
      return this.$store.getters.saveCookie;
    },
    playListGet() {
      playListGet(this.musiclistId, this.saveCookie()).then((res) => {
        console.log(res);
        this.musiclist = res.data.playlist;
        this.musicauthor = this.musiclist.creator
        this.musicsong = this.musiclist.tracks
        console.log(this.musicsong)
      });
    },
    // 返回上一页
    musicback(){
      this.$router.go(-1)
    },
    // 监听刷新
    contentScroll(position){
      // console.log(position)
      // this.topShow = -position.y < 100
    },
    // 显示大图片
    musicBigShow(){
      this.bigPicShow = true
    },
    // 隐藏大图片
    musicBigHide(){
      this.bigPicShow = false
    }
  },
  components:{
    BScroll,
    ListTop,
    ListSong,
    ListMusicBg
  }
};
</script>

<style lang="less">
.music-list-main {
}
.muslis-top {
  
  
}
.muslis-top span {
  opacity: 0;
}
.mustopActive{
  position:fixed;
  z-index: 9;
  height: 3.5em;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  animation: musicTop 2s linear;
  span{
    color: #fff;
  margin-left: 4em;
  font-size: 1.2em;
  font-weight: 900;
  // margin-top: 15px;
  line-height: 3em;
  opacity: 1;
  }
}
@keyframes musicTop{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

.top-back img {
  height: 2em;
  width: 2em;
  top: 0.8em;
  left: 10px;
  position: fixed;
  z-index: 10;
}

// 滑动
.music-list-content{
  height: calc(100vh - 45px);
   overflow: hidden;
  //  position: relative;
}
</style>