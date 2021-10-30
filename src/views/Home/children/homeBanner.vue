<template>
  <div class="home-banners">
    <div
      class="banner-img"
      ref="img"
     
    >
     <!-- @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend" -->
      <div class="banner-item" v-for="(item, index) in BannerList" :key="index">
        <!-- <div v-show="bannerIndex === index" class="banner-icon">
        <img :src="item.pic" alt="" />
      </div> -->

        <img :src="item.pic" alt="" />
      </div>
    </div>
    <!-- 轮播图下标 -->
    <div class="banner-li">
      <li
        :class="{ activeBanner: bannerIndex === index }"
        v-for="(item, index) in bannerAcitves"
        :key="index"
        @click="switchBanner(index)"
      ></li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    BannerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      img:'',  // 滑动元素
      bannerAcitves: 12,
      index: 1,
      bannerIndex: 0, // 轮播图索引
      timer: null, // 定时器
      startX: "", // 开始滑动
      moveX: "", // 滑动距离
      translatex: "", // 偏移距离
      w: "", // 宽度
    };
  },
  created() {},
  mounted() {
    this.startTime();
    // this.imgAnimate()
    // this.swiper()
  },
  methods: {
    // 滑动轮播图初始化
    swiper() {
      let swipImg = document.querySelector(".banner-img");
      let slides = document.getElementsByClassName("banner-item");
      let first = slides[0].cloneNode(true);
      let last = slides[slides.length - 1].cloneNode(true);
      swipImg.appendChild(first);
      swipImg.insertBefore(last, slides[0]);

      this.bannerAcitves = slides - 2;
    },
    // 开启定时器
    startTime() {
      this.timer = setInterval(() => {
        this.bannerIndex++;
        if (this.bannerIndex >= 12) {
          this.img.style.transition = "none";
          this.bannerIndex = 0;
          // this.img.style.transform = `translateX(${this.translatex}px)`;
        }
        this.imgAnimate();
      }, 2000);
    },
    // 关闭定时器
    stopTime() {
      clearInterval(this.timer);
    },
    // 点击下标切换图片
    switchBanner(index) {
      this.bannerIndex = index;
    },
    // 滑动方法
    imgAnimate() {
      this.img = document.querySelector('.banner-img')
      var father = document.querySelector(".home-banners");
      this.w = father.offsetWidth;
      this.translatex = -this.bannerIndex * this.w;
      // console.log(translatex);
      this.img.style.transition = "1s";
      this.img.style.transform = `translateX(${this.translatex}px)`;
    },
    // 按下
    // touchstart() {
    //   this.stopTime();
    //   if (event.targetTouches[0].pageX) {
    //     this.startX = event.targetTouches[0].pageX;
    //   }
    // },
    // touchmove() {
    //   // console.log(event);
    //   if (event.targetTouches[0].pageX) {
    //     this.moveX = event.targetTouches[0].pageX - this.startX;
    //   }
    //   this.$refs.img.style.transform = `translateX(${
    //     this.translatex + this.moveX
    //   }px)`;
    // },
    // touchend() {
    //   if (Math.abs(this.moveX) > 80) {
    //     if (this.moveX < 0) {
    //       this.bannerIndex++;
    //       this.translatex = -this.bannerIndex * this.w;
    //       this.$refs.img.style.transition = "1s";
    //       this.$refs.img.style.transform = `translateX(${this.translatex}px)`;
    //     }
    //   }
    //   this.startTime();
    // },
  },
};
</script>

<style lang="less" >
.home-banners {
  // transform: translate();
  // trans
  position: relative;
  padding-top: 1em;
  // height: 100%;
  width: 100vw;
  overflow: hidden;
}
.banner-img {
  display: flex;
  width: 1200vw;
  // float: left;
}
.banner-item {
  // margin-right: 35px;
  flex: 1;
  height: 130px;
  width: 340px;
  // margin-right: 50px;
  overflow: hidden;
  // float: left;
  img {
    // margin-right: 50px;
    height: 100%;
    width: 22em;
    border-radius: 10px;
  }
}



.home-banners .banner-li {
  position: absolute;
  color: #fff;
  display: flex;
  bottom: 10px;
  // left: 50px;
  // justify-content: center;
  left: 50%;
  transform: translateX(-50%);
}
.home-banners .banner-li li {
  border-bottom: rgb(119, 117, 117) solid 3px;
  list-style-type: none;
  width: 15px;
  margin: 2px;
}
.home-banners .banner-li .activeBanner {
  border-bottom: #fff solid 3px;
  list-style-type: none;
  width: 15px;
  margin: 2px;
}
</style>