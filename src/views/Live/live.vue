<template>
  <div class="wrapper">
    <b-scroll-x class="content">
      <h1>
        你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天
      </h1>
    </b-scroll-x>
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
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  data() {
    return {
      // 电台分类
      type: 2,

      limit: 15,
    };
  },
  created() {
    // this.liveRecomPost()
    this.liveCatePost();
    this.liveRecoTypePost()

    this.liveHoursGet();
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
        console.log(res);
      });
    },

    // 电台分类详情
    liveRecoTypePost(){
      liveRecoTypePost(this.type,this.savecookie).then(res=>{
        console.log(res)
      })
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
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
}
.content {
  display: inline-block;
}
</style>