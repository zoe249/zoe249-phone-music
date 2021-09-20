<template>
  <div class="profile">
    <!-- 顶部搜索栏 -->
    <main-top>
      <img
        class="top-right"
        slot="right"
        :src="$store.state.loginState.avatarUrl"
      />
    </main-top>

    <!-- 滑动内容 -->
    <b-scroll class="profile-scroll" ref="scroll">
      <!-- 昵称与头像 -->
      <div class="profile-user">
        <div class="user-pic">
          <img :src="profileUser.avatarUrl" alt="" />
        </div>
        <div class="user-text">
          <div class="user-name">{{ profileUser.nickname }}</div>
          <div class="user-level">Lv.{{ profile.level }}</div>
        </div>
      </div>

      <!-- 用户歌单 -->
      <user-playlist :userPlaylist="userPlaylist"></user-playlist>
    </b-scroll>

    <!-- <li v-for="(item,index) in Likelist" :key="index">{{item}}</li> -->
  </div>
</template>

<script>
import {
  profileDetail,
  profileLikelist,
  profilePlaylist,
} from "@/network/Get/Profile";
import userPlaylist from "./children/UserPlaylist.vue"
import MainTop from "@/components/content/MainTop/MainTop.vue";
import BScroll from "@/components/comment/better-scroll/BetterScroll.vue";
export default {
  data() {
    return {
      // 用户信息
      profile: {},
      // 用户信息
      profileUser: {},
      // Likelist:[]
      // 用户歌单
      userPlaylist: [],
    };
  },
  created() {
    this.profileDetail(this.saveUserId(), this.saveCookie());
    // this.profileLikelist(this.saveUserId(),this.saveCookie())
    
    // console.log(this)
  },
  mounted() {

    this.profilePlaylist(this.saveUserId(), this.saveCookie());
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
    // 发送请求，获取用户信息
    profileDetail(uid, cookie) {
      profileDetail(uid, cookie).then((res) => {
        // console.log(res)
        this.profileUser = res.data.profile;
        this.profile = res.data;
      });
    },
    // 发送请求，获取用户歌单
    profilePlaylist(uid, cookie) {
      profilePlaylist(uid, cookie).then((res) => {
        this.userPlaylist = res.data.playlist;
        this.$refs.scroll.refresh()
      });
      
    },
    // // 喜欢的音乐
    // profileLikelist(uid,cookie){
    //   profileLikelist(uid,cookie).then(res=>{
    //     console.log(res.data.ids)
    //     this.Likelist = res.data.ids
    //     // return res.data.ids
    //     console.log(this.Likelist.length)
    //     this.Likelist.filter(async (currentValue,index,arr)=>{

    //          setTimeout(()=>{
    //           //  currentValue = await currentValue+"aaa"
    //         },500)
    //        await console.log(currentValue)
    //     })
    //   })
    // }
  },
  components: {
    MainTop,
    BScroll,
    userPlaylist,
  },
};
</script>

<style lang="less">
.top-right {
  height: 1.8em;
  width: 1.8em;
  border-radius: 50%;
}


.profile-scroll{
  height: calc(100vh - 49px - 49px - 3em);
  overflow: hidden;
}
.profile-user {
  height: 5em;
  overflow: hidden;
  width: 94vw;
  margin-left: 3vw;
  display: flex;
  align-items: center;
}
.user-pic img {
  margin-left: 1em;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  border: 2px solid #fff;
}
.user-text {
  margin-left: 1em;
  color: #fff;
}
.user-text .user-name {
  font-weight: 900;
  margin-bottom: 0.3em;
}
.user-text .user-level {
  font-size: 10px;
  width: 2rem;
  height: 1rem;
  color: rgb(110, 108, 108);
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  line-height: 1rem;
}

// 用户歌单
.profile-playlist {
  width: 94vw;
  margin-left: 3vw;
  // background-color: rgba(0, 0, 0, 0.2);
}
.user-mlist-tab {
  color: #ccc;
  display: flex;
  justify-content: center;
}
.user-mlist-tab span {
  margin: 0 1em;
}

.user-mlist {
  margin-top: 1em;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
.user-mlist .playlist-item {
  height: 5em;
  width: 88vw;
  margin-left: 3vw;
  display: flex;
  align-items: center;
}
.playlist-item .playlist-pic img {
  width: 3.5em;
  height: 3.5em;
  border-radius: 0.4em;
}
.playlist-item .playlist-text {
  margin-left: 1em;
}
.playlist-name {
  margin-bottom: 10px;
  font-size: 15px;
  color: #fff;
}
.playlist-tracks {
  font-size: 10px;
  color: #ccc;
}
</style>