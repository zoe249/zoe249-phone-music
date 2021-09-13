<template>
  <div class="music-list-main">
    <div class="muslis-top" :class="{mustopActive:topShow}">
      <span>歌单</span>
    </div>
    <!-- 返回按钮 -->
    <div class="top-back">
      <img src="../../assets/img/main/back.png" alt="" />
    </div>

    <!-- 顶部信息 -->
    <div class="music-top-pic">
      <div class="music-top-flex">
        <div class="top-pic-img">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="top-pic-text">
          <div class="pic-text-name">古风歌曲</div>
          <div class="pic-text-anthor">
            <img src="../../assets/logo.png" alt="" />
            <span>周深</span>
          </div>
          <div class="pic-text-title">你那天那天在脸红什在脸红什么你那天在脸红什么</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { playListGet } from "@/network/Get/MusicList";
export default {
  data() {
    return {
      topShow: true,
      musiclistId: "",
      //   图片信息
      musiclist: {},
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
        console.log(this.musiclist);
      });
    },
  },
};
</script>

<style lang="less">
.music-list-main {
}
.muslis-top {
  
  
}
.muslis-top span {
  color: #fff;
  margin-left: 4em;
  font-size: 1.2em;
  font-weight: 900;
  // margin-top: 15px;
  line-height: 3em;
}
.mustopActive{
    position: absolute;
  z-index: 9;
  height: 3.5em;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
    animation: musicTop 2s linear;
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

// 大图片与歌单信息
.music-top-pic {
  position: absolute;
  top: 0;
  height: 15.5em;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
}
.music-top-flex {
  display: flex;
  align-items:initial;
  height: 8em;
  margin: 0 10px;
}

.top-pic-img {
  height: 8em;
  width: 8em;
}
.top-pic-img img {
  height: 8em;
  width: 8em;
  border-radius: 10px;
}
.top-pic-text {
  width: 13em;
  margin-left:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pic-text-name {
    color: #fff;
    margin-top: 0.5em;
}
.pic-text-anthor{
    display: flex;
    align-items: center;
    img{
        height: 1.2em;
        width: 1.2em;
        border-radius: 50%;
        margin-right: .8em;
    }
    span{
        color: #ccc;
        font-size: 12px;
    }
}
.pic-text-title{
    color: #ccc;
    font-size: 12px;
    text-overflow: ellipsis;
    // width: 13em;
    overflow: hidden;
    white-space:nowrap;

}
</style>