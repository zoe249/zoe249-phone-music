<template>
  <div class="follow">
    <!-- 顶部 -->
    <main-top />

    <b-scrollx class="scrollx" ref="scrollx">
      <!-- 关注列表 -->
      <div class="follow-user">
        <div
          class="user-item"
          v-for="(item, index) in followsList"
          :key="index"
          @click="followClick(item.userId)"
        >
          <img v-lazy="item.avatarUrl" alt="" />
          <div class="username">{{ item.nickname }}</div>
        </div>
      </div>
    </b-scrollx>

    <b-scroll class="scroll" ref="scroll">
      <!-- 关注歌手新歌 -->
      <div class="artist-song">
        <div
          class="newsong-item"
          v-for="(item, index) in artistnewList"
          :key="index"
          @click="artistClick(item.songLists[0].id,item.blockTitle.resourceName,item.blockTitle.artistName)"
        >
          <div class="newsong-item-img">
            <img v-lazy="item.songLists[0].al.picUrl" alt="" />
            <!-- <img v-lazy="item.blockTitle.imgUrl" alt="" /> -->
          </div>
          <div class="newsong-item-text">
            <div class="item-text-author">
              <div>{{ item.blockTitle.resourceName }}</div>
              <!-- <div> {{ item.blockTitle.artistName }}</div> -->
            </div>
            <div class="item-text-text">{{ item.blockTitle.artistName }}</div>
          </div>
        </div>
      </div>
    </b-scroll>
  </div>
</template>

<script>
import { followList, artistSong } from "@/network/Get/Follow.js";
import MainTop from "@/components/content/MainTop/MainTop.vue";
import BScrollx from "@/components/comment/better-scroll/BetterScroolX.vue";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
export default {
  data() {
    return {
      // 关注列表
      followsList: [],
      followId: "",
      limit: 15,
      // 动态列表
      artistnewList: [],
    };
  },
  created() {
    // console.log(this.$store)
  },
  mounted() {
    this.followList(this.saveUserId(), this.saveCookie());
    this.artistSong(this.limit, this.saveCookie());
  },
  methods: {
    // 获取用户id
    saveUserId() {
      return this.$store.getters.saveUserId;
    },
    // 获取cookie
    saveCookie() {
      return this.$store.getters.saveCookie;
    },
    // 获取关注列表
    followList(uid, cookie) {
      followList(uid, cookie).then((res) => {
        this.followsList = res.data.follow;
        this.$refs.scrollx.refresh();
      });
    },
    // 关注歌手新歌
    artistSong(limit, cookie) {
      artistSong(limit, cookie).then((res) => {
        this.artistnewList = res.data.data.newWorks;
      });
      this.$refs.scroll.refresh()
    },
    // 单击获取歌手id
    followClick(userId) {
      console.log(userId);
      // this.userEvent(userId,this.limit, this.saveCookie())
    },
    // 单击获取歌手id
    artistClick(id,name,artist) {
      // console.log(id);
      let musicMes = {}
      musicMes.id = id
      musicMes.name = name
      musicMes.artist = artist
      this.$store.dispatch("getMusic",musicMes)
    },
  },
  components: {
    MainTop,
    BScrollx,
    BScroll,
  },
};
</script>

<style lang="less">
.scrollx {
  width: 100vw;
  overflow: hidden;
  border-bottom: 1px solid rgba(172, 172, 172, 0.658);
}
.follow-user {
  display: flex;
  height: 6em;
  // width: 100vw;
  // background: aliceblue;

  align-items: center;
  // padding-left:  3vw;
}
.user-item {
  justify-content: center;
  height: 4em;
  width: 4em;
  margin-right: 1em;
  // padding-bottom: 10px;
}
.user-item img {
  height: 3.2em;
  width: 3.2em;
  border: 2px solid #fff;
  border-radius: 50%;
}
.user-item .username {
  color: #fff;
  font-size: 0.7em;
  // width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.3em;
  width: 3.2rem;
  text-align: center;
}

// 关注歌手新歌
.artist-song {
  width: 94vw;
  // background-color: cornsilk;
  margin-left: 3vw;
  // margin-top: 2em;
}

.scroll{
  height: calc(100vh - 49px - 6em - 49px - 3em);
  overflow: hidden;
}
.newsong-item {
  width: 94vw;
  height: 60px;
  display: flex;
  align-items: center;
  // background-color: aliceblue;
  margin-top: 1em;
}
.home-newsong .newsong-item:active {
  width: 94vw;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #ccc;
}
.newsong-item-img {
  height: 55px;
  width: 55px;
  margin-right: 15px;
  img {
    height: 55px;
    width: 55px;
    border-radius: 8px;
  }
}
.newsong-item-text .item-text-author div:nth-child(1) {
  color: #fff;
  font-size: 17px;
  width: 15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.newsong-item-text .item-text-author div:nth-child(2) {
  font-size: 12px;
  color: #ccc;
  width: 15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-text-text {
  margin-top: 8px;
  font-size: 13px;
  color: rgb(143, 143, 143);
  width: 15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
