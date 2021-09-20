<template>
  <div class="live">
    <!-- 导航栏 -->
    <live-cont :titles="['推荐', '分类']" @ClickLiveTab="ClickLiveTab" />

    <!-- 推荐页 -->
    <div class="checkout-recommend" v-if="lable">
      <div class="recommend-tab">24小时推荐</div>
        <b-scroll @scroll="contentScroll" ref="scroll" @pullingUp="pullingUp" class="recommend-scroll">
            <live-recommend :liveRecommend="liveRecommend"/>
        </b-scroll>
    </div>

    <!-- 分类页 -->
    <div class="checkout-categroy" v-else>
      <!-- 分类横向滑动 -->
      <div class="wrapper-cate">
        <b-scroll-x ref="scrollx" class="content">
          <category :liveCategory="liveCategory" @Category="Category" />
        </b-scroll-x>
      </div>

      <!-- 电台分类具体内容 -->
      <b-scroll ref="scrolly" class="live-content">
        <live-content :liveCateContent="liveCateContent" />
      </b-scroll>
    </div>
    
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 混入
import { itemListenerMixin, backTopMixin } from "@/utils/utils";
import {
  liveCatePost,
  liveRecoTypePost,
  liveHoursGet,
} from "@/network/Get/Live";
import LiveCont from "./children/LiveCont.vue";
import Category from "./children/Category.vue";
import LiveContent from "./children/LiveContent.vue";
import LiveRecommend from "./children/LiveRecommend.vue"
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
// import backTop from "@/components/content/backTop/backTop.vue"
export default {
  mixins:[itemListenerMixin, backTopMixin],
  data() {
    return {
      // 24小时推荐列表
      liveRecommend: [],
      //是否显示分类
      lable: true,
      // 电台分类
      type: 2,
      // 分类列表
      liveCategory: [],
      // 分类内容
      liveCateContent: [],
      // 24小时推荐列表获取数量
      limit: 15,
    };
  },
  created() {

    
  },
  mounted() {
    this.liveHoursGet();
  },
  methods: {
    savecookie() {
      return this.$store.getters.savecookie();
    },

    // 电台分类
    liveCatePost() {
      liveCatePost(this.savecookie).then((res) => {
        this.liveCategory = res.data.categories;
        setTimeout(() => {
          this.$refs.scrollx.refresh();
        }, 500);
      });
    },

    // 电台分类详情
    liveRecoTypePost(type) {
      liveRecoTypePost(type, this.savecookie).then((res) => {
        // console.log(res);
        this.liveCateContent = res.data.djRadios;
        setTimeout(() => {
          this.$refs.scroll.refresh();
        }, 500);
      });
    },

    // 24小时电台
    liveHoursGet() {
      liveHoursGet(this.limit).then((res) => {
        // console.log(res);
        this.liveRecommend = res.data.data.list;
      });
    },
    // 切换
    ClickLiveTab(index) {
      switch (index) {
        case 0:
          this.lable = true;
          break;
        case 1:
          this.lable = false;
          break;
      }
      this.liveCatePost();
      this.liveRecoTypePost(this.type);
    },
    // 切换分类类型
    Category(type) {
      this.type = type;
      this.liveRecoTypePost(this.type);
    },
    // 监听滚动的位置
    contentScroll(position){
      // 判断backTop是否显示
      this.listenShoBackTop(position)
    },
    // 监听下拉
    pullingUp(){
      // if(this.limit >= 105)
      // alert('已经到底了')
      this.limit  = this.limit+15
      // console.log(this.limit)
      this.liveHoursGet()
      this.$refs.scroll.refresh()
    }
  },
  components: {
    BScrollX,
    BScroll,
    LiveCont,
    Category,
    LiveContent,
    LiveRecommend
  },
};
</script>

<style lang="less" scoped>
.wrapper-cate {
  white-space: nowrap;
  width: 100vw;
  overflow: hidden;
  // margin-left: 3vw;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
}
.content {
  display: inline-block;
  // display: flex;
  // flex-direction: row;
  width: 94vw;
  margin-left: 3vw;
}
.live-content {
  height: calc(100vh - 49px - 6em - 3em);
  overflow: hidden;
}

// 推荐页面
// 导航

.recommend-scroll {
  height: calc(100vh - 49px - 5.5em);
  overflow: hidden;
}
.recommend-tab {
  color: #97d0ee;
  height: 2.5em;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13px);
  font-size: 1em;
  line-height: 2.5em;
  text-align: center;
}


</style>