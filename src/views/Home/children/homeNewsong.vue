<template>
  <div class="home-newsong-main">
    <h3>这些音乐提神醒脑</h3>
    <b-scroll-x class="newsong-content">
      <div class="home-newsong">
        <div
          class="newsong-item"
          v-for="(item, index) in Newsong"
          :key="index"
          @click="NewsongClick(item.id)"
        >
          <div class="newsong-item-img">
            <img v-lazy="item.picUrl" alt="" />
          </div>
          <div class="newsong-item-text">
            <div class="item-text-author">
              <span>{{ item.name }} - </span>
              <span> {{ item.song.artists[0].name }}</span>
            </div>
            <div class="item-text-text">{{ item.song.album.name }}</div>
          </div>
        </div>
      </div>
    </b-scroll-x>
  </div>
</template>

<script>
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  props: {
    Newsong: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    BScrollX,
  },
  methods: {
    NewsongClick(id) {
      console.log(id);
    },
  },
};
</script>


<style lang="less" scoped>
// 推荐音乐
.home-newsong-main {
  margin-top: 20px;
  padding-top: 10px;
  height: 250px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
h3 {
  color: #fff;
}
.newsong-content {
  margin-top: 10px;
  // width: 100%;
}
.home-newsong {
  height: 210px;
  // background-color: antiquewhite;
  // width: 94vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 282vw;
}
.newsong-item {
  width: 94vw;
  height: 60px;
  display: flex;
  align-items: center;
  // background-color: aliceblue;
  margin-top: 5px;
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
.newsong-item-text .item-text-author span:nth-child(1) {
  color: #fff;
  font-size: 17px;
}
.newsong-item-text .item-text-author span:nth-child(2) {
  font-size: 12px;
  color: #ccc;
}
.item-text-text {
  margin-top: 8px;
  font-size: 13px;
  color: rgb(143, 143, 143);
}
</style>