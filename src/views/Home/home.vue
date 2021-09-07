<template>
  <div class="Home-Main wrapper">
    <b-scroll class="content">
      <!-- 轮播图 -->
      <div class="home-banners">
        <div class="banner-item" v-for="(item,index) in BannerList" :key="index">
          <div v-show="bannerIndex === index" class="banner-icon"><img :src="item.pic" alt=""></div>
        </div>
        <!-- 轮播图下标 -->
        <div class="banner-li">
          <li :class="{activeBanner:bannerIndex === index}" 
          v-for="(item,index) in BannerList" 
          :key="index"
          @click="switchBanner(index)"></li>
        </div>
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
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import {getHomeBanners} from '@/network/Get/Home'
export default {
  data () {
    return {
      // 轮播图列表
      BannerList:[],
      // 轮播图索引
      bannerIndex:0,
      
    }
  },
  created () {
    this.getHomeBanners()
    this.setIndexBanner()
  },
  methods: {
    // 轮播图数据
    getHomeBanners(){
      getHomeBanners().then(res=>{
        console.log(res)
        this.BannerList = res.data.banners
      })
    },
    // 定时器切换轮播图
    setIndexBanner(){
      setInterval(()=>{
        this.bannerIndex++
        if(this.bannerIndex === 12){
          this.bannerIndex = 0
        }
      },2000)
    },
    // 点击下标切换图片
    switchBanner(index){
      this.bannerIndex = index
    }
  },
  components: {
    BScroll,
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


// 轮播图
.home-banners{
  position: relative;
  margin-top: 20px;
  height: 135px;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
}
.banner-item .banner-icon{
  height: 100%;
  width: 100%;
  border-radius: 15px;
  img{
    height: 100%;
    width: 100%;
  }
}

.home-banners .banner-li{
  position: absolute;
  color: #fff;
  display: flex;
  bottom: 10px;
  // left: 50px;
  // justify-content: center;
  left: 50%;
  transform: translateX(-50%);
}
.home-banners .banner-li li{
  border-bottom: rgb(119, 117, 117) solid 3px;
  list-style-type: none;
  width: 15px;
  margin: 2px;
}
.home-banners .banner-li  .activeBanner{
  border-bottom: #fff solid 3px;
  list-style-type: none;
  width: 15px;
  margin: 2px;
}
</style>