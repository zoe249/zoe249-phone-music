<template>
  <div class="Main-Tab-Bar">
      <tab-bar>
          <tab-bar-item path="/home">
              <img slot="item-icon" src="@/assets/img/tab-bar-png/home-f.png" alt="">
              <img slot="item-active" src="@/assets/img/tab-bar-png/home.png">
              <div slot="item-name">首页</div>
          </tab-bar-item>
          <tab-bar-item path="/live">
              <img slot="item-icon" src="@/assets/img/tab-bar-png/live-f.png" alt="">
              <img slot="item-active" src="@/assets/img/tab-bar-png/live.png">
              <div slot="item-name">播客</div>
          </tab-bar-item>
          <tab-bar-item path="/follow">
              <img slot="item-icon" src="@/assets/img/tab-bar-png/follow-f.png" alt="">
              <img slot="item-active" src="@/assets/img/tab-bar-png/follow.png">
              <div slot="item-name">关注</div>
          </tab-bar-item>
          <tab-bar-item path="/music">
              <img slot="item-icon" src="@/assets/img/tab-bar-png/music-f.png" alt="">
              <img slot="item-active" src="@/assets/img/tab-bar-png/music.png">
              <div slot="item-name">音乐</div>
          </tab-bar-item>
          <tab-bar-item path="/video">
              <img slot="item-icon" src="@/assets/img/tab-bar-png/video-f.png" alt="">
              <img slot="item-active" src="@/assets/img/tab-bar-png/video.png">
              <div slot="item-name">视频</div>
          </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/comment/TabBar/TabBar.vue";
import TabBarItem from "@/components/comment/TabBar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style lang="less">
.Main-Tab-Bar{
    // z-index: 99;
    // height: 49px;
    // position:absolute;
    // bottom: 0;
    // left: 0;
    // right: 0;
}
</style>