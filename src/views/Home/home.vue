<template>
  <div class="Home-Main wrapper">
    <b-scroll class="content">
      <!-- 轮播图 -->
      <home-banner :BannerList="BannerList" />

      <!-- 圆形图标 -->
      <home-dragon :Dragon="Dragon" />

      <!-- 登录后歌单 -->
      <home-person-p v-if="HomePost" :PersonPost="PersonPost"/>
      
      <!-- 推荐音乐 -->
      <home-newsong :Newsong="Newsong" />

      <!-- 推荐视频 -->
      <home-video-p v-if="HomePost" :VideoPost="VideoPost"/>

      <!-- 推荐歌单 -->
      <home-person :Person="Person" />

      <!-- 占位 -->
      <div class="baise"></div>
    </b-scroll>
  </div>
</template>

<script>
import HomeDragon from "./children/homeDragon.vue";
import HomeBanner from "./children/homeBanner.vue";
import HomePerson from "./children/homePerson.vue";
import HomeNewsong from "./children/homeNewsong.vue";
import HomePersonP from "./children/homePersonPost.vue"
import HomeVideoP from  "./children/homeVideoPost.vue"
// 引入纵向侧边栏
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
import {
  getHomeBanners,
  getHomeDragon,
  getHomePerson,
  getHomeNewsong,
  // post请求(登录)
  HomevideoPost,
  HomePersonPost,
} from "@/network/Get/Home";

// import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      // 轮播图列表
      BannerList: [],
      // 圆形图标列表
      Dragon: [],
      // 推荐歌单列表
      Person: [],
      // 推荐音乐列表
      Newsong: [],
      NewsongBg: false,
      //是否显示登录后的数据
      HomePost:false,
      // 登录后的推荐列表
      PersonPost:[],
      // 视频列表
      VideoPost:[]
    };
  },
  computed: {
    // saveCookie(){
    //   return this.$store.getters.saveCookie
    // }
  },
  created() {
    // 登录前
    this.GetMethod();
    // 登录后
    this.PostMethod();
  },
  methods: {
    // 轮播图数据
    getHomeBanners() {
      getHomeBanners().then((res) => {
        this.BannerList = res.data.banners;
      });
    },
    // 圆形入口数据
    getHomeDragon() {
      getHomeDragon().then((res) => {
        this.Dragon = res.data.data;
      });
    },
    // 获取推荐歌单
    getHomePerson() {
      getHomePerson().then((res) => {
        this.Person = res.data.result;
      });
    },
    // 获取推荐音乐
    getHomeNewsong() {
      getHomeNewsong().then((res) => {
        this.Newsong = res.data.result;
      });
    },
    clickList(id) {
      console.log(id);
    },
    saveCookie() {
      return this.$store.getters.saveCookie;
    },
    // 登录前请求
    GetMethod() {
      this.getHomeBanners();
      this.getHomeDragon();
      this.getHomePerson();
      this.getHomeNewsong();
    },
    // 登录后请求
    PostMethod() {
      if (
        localStorage.getItem("cookie") &&
        localStorage.getItem("cookie") !== null
      ) {
        this.HomevideoPost(this.saveCookie());
        this.HomePersonPost(this.saveCookie());
        this.HomePost = true
      }
    },
    // 推荐视频
    HomevideoPost(cookie) {
      HomevideoPost(cookie).then((res) => {
        console.log(res);
        this.VideoPost = res.data.datas
      });
    },
    // 每日推荐歌单
    HomePersonPost(cookie) {
      HomePersonPost(cookie).then((res) => {
        this.PersonPost = res.data.recommend
      });
    },
  },
  components: {
    BScroll,
    BScrollX,
    HomeBanner,
    HomeDragon,
    HomePerson,
    HomeNewsong,
    HomePersonP,
    HomeVideoP,
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
.baise {
  height: 300px;
}
</style>