<template>
  <div class="Home-Main wrapper">
    <b-scroll class="content">
      <!-- 轮播图 -->
      <home-banner :BannerList="BannerList" />

      <!-- 圆形图标 -->
      <home-dragon :Dragon="Dragon" />

      <!-- 推荐歌单 -->
      <home-person :Person="Person"/>
      

      <!-- 占位 -->
      <div class="aaaa">1231111111111111111111111111112311111111111111111111111111123111111111111111111111111111231111111111111111111111111112311111111111111111111111111123111111111111111111111111111231111111111111111111111111112311111111111111111111111111123111111111111111111111111111231111111111111111111111111112311111111111111111111111111123111111111111111111111111111231111111111111111111111111112311111111111111111111111111</div>
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
import HomeDragon from "./children/homeDragon.vue";
import HomeBanner from "./children/homeBanner.vue";
import HomePerson from "./children/homePerson.vue"
// 引入纵向侧边栏
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
import {
  getHomeBanners,
  getHomeDragon,
  getHomePerson,
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
    };
  },
  created() {
    this.getHomeBanners();
    this.getHomeDragon();
    this.getHomePerson();
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
    // 获取推荐歌单
    getHomePerson() {
      getHomePerson().then((res) => {
        console.log(res);
        this.Person = res.data.result;
        console.log(this.Person);
      });
    },
    clickList(id){
      console.log(id)
    }
  },
  components: {
    BScroll,
    BScrollX,
    HomeBanner,
    HomeDragon,
    HomePerson
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

// 推荐歌单
h3{
  color: #fff;
  margin-left: 2px;
}
.home-person-main {
  padding-top: 10px;
  // background-color: #00000090;
  background-color: rgba(0, 0, 0, 0.2);
  height: 200px;
  margin-top: 20px;
  border-radius: 15px;
}
.person-scroll-main {
  // white-space: nowrap;
}
.person-content {
  margin-top: 15px;
}
.person-content .home-person {
  display: flex;
}
.person-content .home-person .person-item{
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 125px;
  // margin-right: ;
}
.person-item  .person-item-img{
  img {
    width: 110px;
    height: 110px;
    border-radius: 10px;
    display: inline-block;
    word-wrap: break-word;
  }
}
.home-person .person-item  .person-item-text{
  // height: 35px;
  width: 110px;
  color: #fff;
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

}
</style>