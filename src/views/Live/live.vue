<template>
  <div class="live">
    <!-- 导航栏 -->
    <live-tab :titles="['推荐', '分类']"></live-tab>

    <!-- 分类横向滑动 -->
    <div class="wrapper-cate">
      <b-scroll-x ref="scroll" class="content">
        <div class="content-main">
          <div
            class="category-item"
            v-for="(item, index) in liveCategory"
            :key="index"
          >
            
            <span>{{ item.name }}</span>
          </div>
        </div>
      </b-scroll-x>
    </div>
  </div>
</template>

<script>
import {
  liveRecomPost,
  liveCatePost,
  liveRecoTypePost,
  liveDetailPost,
  liveHoursGet,
} from "@/network/Get/Live";
import LiveTab from "./children/LiveTab.vue";
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  data() {
    return {
      // 电台分类
      type: 2,
      // 分类列表
      liveCategory: [],
      limit: 15,
    };
  },
  created() {
    // this.liveRecomPost()
    this.liveCatePost();
    this.liveRecoTypePost();

    this.liveHoursGet();
  },
  mounted () {
    this.liveCatePost();
  },
  methods: {
    savecookie() {
      return this.$store.getters.savecookie();
    },
    // // 推荐电台
    // liveRecomPost(){
    //   liveRecomPost(this.savecookie).then(res=>{
    //     console.log(res)
    //   })
    // },
    // 电台分类
    liveCatePost() {
      liveCatePost(this.savecookie).then((res) => {
        this.liveCategory = res.data.categories;
        console.log(this.liveCategory);
        this.$refs.scroll.refresh()
      });
    },

    // 电台分类详情
    liveRecoTypePost() {
      liveRecoTypePost(this.type, this.savecookie).then((res) => {
        console.log(res);
      });
    },

    // 24小时电台
    liveHoursGet() {
      liveHoursGet(this.limit).then((res) => {
        console.log(res);
      });
    },
  },
  components: {
    BScrollX,
    LiveTab,
  },
};
</script>

<style lang="less" scoped>
.wrapper-cate {
  white-space: nowrap;
  width: 100vw;
  overflow: hidden;
  // margin-left: 3vw;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
}
.content {
  display: inline-block;
  // display: flex;
  // flex-direction: row;
  width: 94vw;
  margin-left: 3vw;
}
.content-main {
  display: flex;
}
.content-main .category-item{
  margin-right: 1em;
  color:#fff;
  height: 3em;
  line-height: 3em;
}
// .category-item .category-item-true img{
//   height: 2em;
//   width: 2em;
// }
</style>