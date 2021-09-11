<template>
  <div class="search-main wrapper">
    <div class="search-control"></div>
    <b-scroll class="content" ref="scroll" @pullingUp="SearchpullingUp">
      <div class="search-song">
        <div
          class="search-song-item"
          v-for="(item, index) in searchsongList"
          :key="index"
        >
          <div class="item-name">{{ item.name }}</div>
          <div class="item-author">
            <span>{{ item.ar[0].name }}</span>
            <span> - </span>
            <span>{{ item.al.name }}</span>
          </div>
        </div>
      </div>
      <!-- 搜索歌曲 -->
      <div class="search-title">下拉下载更多</div>
    </b-scroll>
  </div>
</template>

<script>
import { getSearch } from "@/network/Get/Search";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
export default {
  data() {
    return {
      // 搜索参数
      queryInfo: {
        keywords: "",
        limit: 15,
        offset: 1,
        type: 1,
      },
      searchsongList: [],
    };
  },
  created() {},
  mounted() {
    this.searchQuery();
    this.getSearch();
    
  },
  methods: {
    searchQuery() {
      this.$eventBus.$on("serchKeywords", (key) => {
        this.queryInfo.keywords = key;
        console.log(key);
        this.getSearch();
      });
    },
    // 请求数据
    getSearch() {
      getSearch(
        this.queryInfo.keywords,
        this.queryInfo.limit,
        this.queryInfo.type,
        this.queryInfo.offset
      ).then((res) => {
        console.log(res);
        this.searchsongList = res.data.result.songs;
        this.$refs.scroll.refresh();
      });
    },
    // 上拉加载更多
    SearchpullingUp(){
        this.queryInfo.limit = this.queryInfo.limit+10
        console.log(this.queryInfo.limit)
        this.getSearch();
    },
  },
  components: {
    BScroll,
  },
};
</script>

<style lang="less" scoped>
.search-main {
  // position: absolute;
  height: calc(100vh - 49px -49px);
  // margin: 49px 0;
}
.wrapper {
  //   height: calc(100vh - 49px -49px);
  //   width: 94vw;
  // position: relative;
  //   margin: 49px 0px;
}
.content {
  width: 94vw;
  height: calc(100vh - 49px - 49px);
  margin-left: 12px;
  // position: absolute;
  overflow: hidden;
}
.search-control {
  height: 35px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}

// 音乐部分
.search-song {
  color: #fff;
  margin-top: 15px;
  margin-bottom: 45px;
}
.search-song-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #ccc;
  height: 60px;
  // margin-top: 10px;
  // border-bottom: 1px solid #ccc;
}
.item-name {
  font-size: 15px;
  color: #9cdcfe;
  margin-bottom: 5px;
}
.item-author {
  color: #eff0f0;
  font-size: 13px;
  // margin-top: 5px;
}
.item-author span:nth-child(1) {
  margin-right: 5px;
}
.item-author span:nth-child(2) {
  margin-right: 5px;
}

.search-title {
  height: 150px;
  color: #fff;

}
</style>