<template>
  <div class="Home-Main wrapper">
    <b-scroll class="content">
      <!-- 轮播图 -->
      <home-banner :BannerList="BannerList" />

      <!-- 圆形图标 -->
      <div class="home-dragon-main">
              <b-scroll-x class="scrollx-content">
        <div class="home-dragon">
          <!-- 内容 -->
          <div class="dragon-item" v-for="(item, index) in Dragon" :key="index">
            <div class="dragon-item-img">
              <img :src="item.iconUrl" alt="" />
            </div>
            <div class="dragon-item-text">
              {{ item.name }}
            </div>
            <!-- 颜色 -->
            <div class="dragon-item-color"></div>
          </div>
        </div>
      </b-scroll-x>
      </div>

      <div class="baise">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </b-scroll>
  </div>
</template>

<script>
import HomeBanner from "./children/homeBanner.vue";
// 引入纵向侧边栏
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
// 横向侧边栏
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
import { getHomeBanners, getHomeDragon } from "@/network/Get/Home";
export default {
  data() {
    return {
      // 轮播图列表
      BannerList: [],
      // 圆形图标列表
      Dragon: [],
    };
  },
  created() {
    this.getHomeBanners();
    this.getHomeDragon();
  },
  methods: {
    // 轮播图数据
    getHomeBanners() {
      getHomeBanners().then((res) => {
        // console.log(res)
        this.BannerList = res.data.banners;
      });
    },
    // 圆形入口数据
    getHomeDragon() {
      getHomeDragon().then((res) => {
        console.log(res);
        this.Dragon = res.data.data;
      });
    },
  },
  components: {
    BScroll,
    HomeBanner,
    BScrollX,
  },
};
</script>

<style lang="less" scoped>
.Home-Main {
  z-index: 1;
}
.wrapper {
  height: calc(100vh - 45px);
  width: 94vw;
  // position: relative;
  margin: 49px 0px;
}
li {
  color: #fff;
}
.content {
  width: 94vw;
  height: calc(100vh - 45px);
  margin: 49px 0px;
  margin-left: 12px;
  //  background-color: chocolate;
  // position: absolute;
  overflow: hidden;
}

// 圆形图标
.home-dragon-main{
  white-space: nowrap;
    height: 95px;
  width: 100%;
  overflow: hidden;
}
.scrollx-content{
  margin-top: 20px;
  display: inline-block;
  height: 70px;
  width: 100%;
  overflow: hidden;
}
.home-dragon {
  width: 100%;
  // margin-top: 20px;
  display: flex;
  overflow: hidden;
  text-align: center;
}
.dragon-item {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  // color: red;
  text-align: center;
}
.dragon-item .dragon-item-img {
  height: 50px;
  width: 50px;
  text-align: center;
  img {
    height: 45px;
    width: 45px;
  }
}
.dragon-item .dragon-item-text {
  margin-top: 8px;
  color: #fff;
  font-size: 8px;
}
// 颜色
.dragon-item .dragon-item-color {
  position: absolute;
  height: 50px;
  width: 50px;
  overflow: hidden;
  background-color: rgba(255, 0, 0, 0.3);
  border-radius: 50%;
}
</style>