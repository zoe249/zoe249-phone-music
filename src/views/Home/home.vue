<template>
  <div class="Home-Main wrapper">
    <b-scroll class="content">
      <!-- 轮播图 -->
      <home-banner :BannerList="BannerList" />

      <!-- 圆形图标 -->
      <home-dragon :Dragon="Dragon" />

      <!-- 推荐歌单 -->
      <home-person :Person="Person"/>

      <!-- 推荐音乐 -->
      <home-newsong :Newsong="Newsong"/>

      <!-- 占位 -->
      <div class="baise">

      </div>
    </b-scroll>
  </div>
</template>

<script>
import HomeDragon from "./children/homeDragon.vue";
import HomeBanner from "./children/homeBanner.vue";
import HomePerson from "./children/homePerson.vue";
import HomeNewsong from "./children/homeNewsong.vue"
// 引入纵向侧边栏
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
import {
  getHomeBanners,
  getHomeDragon,
  getHomePerson,
  getHomeNewsong,
} from "@/network/Get/Home";
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
      Newsong:[],
      NewsongBg:false
    };
  },
  created() {
    this.getHomeBanners();
    this.getHomeDragon();
    this.getHomePerson();
    this.getHomeNewsong();
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
    getHomeNewsong(){
      getHomeNewsong().then(res=>{
        console.log(res)
        this.Newsong = res.data.result
      })
    },
    clickList(id){
      console.log(id)
    },
    
  },
  components: {
    BScroll,
    BScrollX,
    HomeBanner,
    HomeDragon,
    HomePerson,
    HomeNewsong
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
.baise{
  height: 300px;
}



// .home-newsong-main{
//   margin-top: 20px;
//   padding-top: 10px;
//   height: 250px;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.2);
//   border-radius: 15px;
// }
// h3{
//   color: #fff;
//   margin-left: 2px;
// }
// .newsong-scroll-main{
//   width: 100%;
// }
// .newsong-content{
//   margin-top: 10px;
//   // width: 100%;
// }
// .home-newsong{
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   height: 200px;

// }
// .home-newsong .newsong-item{
//   width: 94vw;
//   height: 60px;
// }
</style>