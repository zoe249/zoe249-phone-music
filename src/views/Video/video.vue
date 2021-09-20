<template>
  <div class="video">
    <!-- 顶部 -->
    <main-top />

    <b-scrollx class="video-scrollx">
      <!-- 视频分类标签 -->
      <video-group :groupList="groupList" @groupClick="groupClick" />
    </b-scrollx>

    <b-scroll class="video-scroll" ref="scrolly"> 
      <!-- 视频 -->
      <div class="video-list">
        <div class="video-item" v-for="(item, index) in videoList" :key="index">
          <div class="video-item-pic">
            <img v-lazy="item.data.previewUrl" alt="" />
          </div>
          <div class="video-item-text">{{ item.data.description }}</div>
        </div>
      </div>
    </b-scroll>
  </div>
</template>

<script>
import { videoGroup, videoGroupId } from "@/network/Get/Video";
import MainTop from "@/components/content/MainTop/MainTop.vue";
import BScrollx from "@/components/comment/better-scroll/BetterScroolX.vue";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import VideoGroup from "./children/VideoGroup.vue";
export default {
  data() {
    return {
      groupList: [],
      // 默认id
      groupId: "58100",
      // 页数
      offset: 0,
      // 视频列表
      videoList: [],
    };
  },
  created() {
    this.videoGroup(this.saveCookie());
    this.videoGroupId(this.groupId, this.offset, this.saveCookie());
  },
  mounted() {
    this.videoGroup(this.saveCookie());
    
  },
  methods: {
    // 获取cookie
    saveCookie() {
      return this.$store.getters.saveCookie;
    },
    // 获取标签列表
    videoGroup(cookie) {
      videoGroup(cookie).then((res) => {
        this.groupList = res.data.data;
      });
    },
    // 获取标签下视频详情
    videoGroupId(id, offset, cookie) {
      videoGroupId(id, offset, cookie).then((res) => {
        console.log(res);
        this.videoList = res.data.datas;
        this.$refs.scrolly.refresh()
      });
    },
    // 切换标签
    groupClick(id) {
      console.log(id);
      this.videoGroupId(id, this.offset, this.saveCookie());
    },
  },
  components: {
    MainTop,
    BScroll,
    BScrollx,
    VideoGroup,
  },
};
</script>

<style lang="less">
.video {
  // color: #000;
}

// 分类标签
.video-scrollx {
  width: 94vw;
  margin-left: 3vw;
  // overflow: hidden;
}

// 视频内容

.video-scroll{
  height: calc(100vh - 49px - 49px - 3em - 3em);
  overflow: hidden;
}

.video-list {
  display: flex;
  color: #fff;
  width: 94vw;
  margin-left: 3vw;
  flex-wrap: wrap;
  justify-content: space-around;
}
.video-list .video-item {
  height: 16em;
  width: 9em;
  // overflow: hidden;
}
.video-item .video-item-pic img {
  height: 13em;
  width: 9.3em;
  border-radius: 15px;
}
.video-item .video-item-text {
  width: 100%;
  height: 3em;
  font-size: 13px;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>