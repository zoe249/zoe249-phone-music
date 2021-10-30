<template>
  <div class="video">
    <div class="videop-scroll">
      <div ref="videop" class="video-main">
        <div
          class="videop-item"
          v-for="(item, index) in videoInfo"
          :key="index"
          @touchstart="btnDown"
          @touchmove="btnMove"
          @touchend="btnUp(index)"
        >
          <div class="item-bg">
            <!-- <img
              :width="item.data.width"
              :height="item.data.height"
              :src="item.data.coverUrl"
              alt=""
            /> -->
            <!-- <video :height="item.data.height+'px'" :width="item.data.width" :src="item.data.url"> 123153</video> -->
            <video-play ref="videoPlay" :videoData="item"></video-play>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import VideoPlay from './videoPlay.vue'
import {videoUrl} from '@/network/Get/Video'
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 视图宽度
      dwidth: "",
      // 视图高度
      dheight: "",
      // 当前y轴位置
      downclientY: "",
      // 滑动后
      upclientY: "",
      // 下滑index高度
      indexNext: null,
      // 上滑
      indexFrom:null,
      // itemIndex
      itemIndex:0,
      // 当前项内容
      videoData:{}
    };
  },
  computed: {
    ...mapState(["videoInfo"]),
  },
  watch: {
    videoInfo() {
      this.videoList();
    },
  },
  created() {
    // console.log(this.computHeight(3750,6670))
    this.domSize();
  },
  methods: {
    // 获取视图宽度
    domSize() {
      this.dwidth = document.documentElement.clientWidth;
      this.dheight = document.documentElement.clientHeight;
    },
    videoList() {
     this.videoInfo.filter( async (item) => {
        item.data.height = this.computHeight(item.data.width, item.data.height);
        item.data.width = 100 + "%";
        // console.log(await this.videoUrl(item.data.vid))
        item.data.url = await this.videoUrl(item.data.vid)
        console.log(item)
      });
    },

    // 根据宽度计算视频自适应高度的方法
    computHeight(w, h) {
      this.domSize();
      let height = h / (w / this.dwidth);
      return parseInt(height);
    },

    // 元素拖动

    // 按下
    btnDown() {
      this.downclientY = event.changedTouches[0].clientY;
      // console.log(this.downclientY);
    },
    // 移动
    btnMove() {
      // console.log("移动");
      
    },
    // 弹起
    btnUp(index) {
      this.upclientY = event.changedTouches[0].clientY;
      // console.log(this.upclientY);
      let scrollY = this.upclientY - this.downclientY;
      if (-scrollY > this.dheight / 2) {
        this.IndexData(index)
        this.clickNext(index);
      }else if(scrollY > this.dheight / 2){
        this.IndexData(index)
        this.clickFrom(index)
        
      }
    },
    // 获取当前项数据
    IndexData(index){
      this.videoData = this.videoInfo[index+1]
      
    },
    // 上一项
    clickFrom(index){
      console.log(this.indexNext)
      if(this.indexNext > 0){
        this.itemIndex--
        this.indexNext = this.indexNext - this.dheight;
        this.$refs.videop.style.transform = `translateY(${-this.indexNext}px)`;
        this.$refs.videop.style.transition = "all 1s";
      }
      // if(this.itemIndex === index){
        this.$refs.videoPlay[index].play()
      // }
    },
    // 下一项
    clickNext(index) {
      // let videom = document.querySelector('.video-main')
      
      if (this.indexNext < this.$refs.videop.offsetHeight) {
        this.itemIndex++
        this.indexNext = this.indexNext + this.dheight;
        this.$refs.videop.style.transform = `translateY(${-this.indexNext}px)`;
        this.$refs.videop.style.transition = "all 1s";
        // console.log(this.$refs.videop.style);
      }
      // if(this.itemIndex === index){
        this.$refs.videoPlay[index].play()
      // }
    },
    // 获取视频连接
    async videoUrl(vid){
      let url = ""
      await videoUrl(vid).then(res=>{
        // console.log(res.data.urls[0].url)
        url =  res.data.urls[0].url
      })
      return url 
      
    }
  },
  components: {
    BScroll,
    VideoPlay
  },
};
</script>

<style lang="less">
.video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 222;
}

.videop-scroll {
  height: 100vh;
}
.videop-item {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #000;
}
// .videop-item .item-bg img{
//   height: 100vh;
//   width: 100vw;
// }
</style>