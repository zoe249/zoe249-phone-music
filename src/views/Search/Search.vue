<template>
  <div class="search-main wrapper">
    <!-- 搜索栏 -->
    <main-top />
    <!-- 搜索类型导航 -->
    <search-control :titles="['单曲', '歌单', '歌手']" @trolClick="trolClick" />

    <b-scroll 
    class="content" 
    ref="scroll" 
    @scroll="contentScroll"
    @pullingUp="SearchpullingUp">
      <!-- 歌曲部分 -->
      <search-song :searchsongList="searchsongList" v-if="typeShow.typeSong" />

      <!-- 歌单部分 -->
      <search-list :searchList="searchList" v-if="typeShow.typeList" />

      <!-- 专辑 -->
      <search-album :searchAlbum="searchAlbum" v-if="typeShow.typeAlbum" />

      <!-- 提示文字 -->
      <div class="search-title">上拉加载可更多哟QAQ</div>

    </b-scroll>

    <!-- 返回顶部 -->
      <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 混入
import { itemListenerMixin, backTopMixin } from "@/utils/utils";
import { getSearch } from "@/network/Get/Search";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
import SearchControl from "./children/SearchControl.vue";
import SearchSong from "./children/SearchSong.vue";
import SearchList from "./children/SearchList.vue";
import SearchAlbum from "./children/SearchAlbum.vue";
import MainTop from '@/components/content/MainTop/MainTop.vue'
export default {
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      // 搜索参数
      queryInfo: {
        keywords: "",
        limit: 15,
        offset: 1,
        // 请求类型
        type: 1,
      },
      // 单曲列表
      searchsongList: [],
      // 歌单列表
      searchList: [],
      // 专辑列表
      searchAlbum: [],
      // 显示类型
      typeShow: {
        typeSong: true,
        typeList: false,
        typeAlbum: false,
      },
    };
  },
  created() {
    console.log(this.$route)
  },
  mounted() {
    this.searchQuery();
    this.getSearch();
  },
  methods: {
    searchQuery() {
      if(this.$route.query){
        this.queryInfo.keywords = this.$route.query.keywords
      }else{
        this.$eventBus.$on("serchKeywords", (key) => {
        this.queryInfo.keywords = key;
        this.getSearch();
      });
      }
    },
    // 请求数据
    getSearch() {
      getSearch(
        this.queryInfo.keywords,
        this.queryInfo.limit,
        this.queryInfo.type,
        this.queryInfo.offset
      ).then((res) => {
        if (this.queryInfo.type === 1) {
          this.searchsongList = res.data.result.songs;
        } else if (this.queryInfo.type === 1000) {
          this.searchList = res.data.result.playlists;
        } else {
          this.searchAlbum = res.data.result.albums;
        }

        this.$refs.scroll.refresh();
      });
    },
    // 切换类型
    trolClick(index) {
      switch (index) {
        case 0:
          this.queryInfo.type = 1;
          this.typeShow.typeSong = true;
          this.typeShow.typeList = false;
          this.typeShow.typeAlbum = false;
          break;
        case 1:
          this.queryInfo.type = 1000;
          this.typeShow.typeList = true;
          this.typeShow.typeSong = false;
          this.typeShow.typeAlbum = false;
          this.queryInfo.limit = 10;
          break;
        case 2:
          this.queryInfo.type = 10;
          this.typeShow.typeSong = false;
          this.typeShow.typeList = false;
          this.typeShow.typeAlbum = true;
          break;
        default:
          break;
      }
      this.getSearch();
    },
    // 上拉加载更多
    SearchpullingUp() {
      this.queryInfo.limit = this.queryInfo.limit + 10;
      this.getSearch();
    },
    // 监听滚动的位置
    contentScroll(position){
      // 判断backTop是否显示
      this.listenShoBackTop(position)
    }
    
  },
  components: {
    BScroll,
    SearchControl,
    SearchSong,
    SearchList,
    SearchAlbum,
    MainTop
    
  },
};
</script>

<style lang="less" scoped>
.search-main {
  // position: absolute;
  height: calc(100vh - 49px -49px - 3em);
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

.search-title {
  margin-top: 20px;
  height: 50px;
  color: #39afee;
  // background-color: #00000090;
  border-radius: 15px;
  text-align: center;
  padding-bottom: 50px;
}
</style>