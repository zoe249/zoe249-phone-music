<template>
  <div class="live-content-main">
    <div
      class="category-item"
      v-for="(item, index) in liveCateContent"
      :key="index"
    >
      <div class="item-pic">
        <img v-lazy="item.picUrl" alt="" />
      </div>
      <!-- 文字内容 -->
      <div class="item-text">
        <div>{{ item.name }}</div>
        <div class="item-avatar">
          <img v-lazy="item.dj.avatarUrl" alt="" />
          <span>{{ item.dj.nickname }}</span>
        </div>
        <div>{{ item.rcmdtext }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    liveCateContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
// 主要内容

.live-content-main {
  width: 94vw;
  margin-left: 3vw;
  margin-top: 1em;
}
.category-item {
  display: flex;
  align-items: center;
  height: 7em;
  // background-color: aliceblue;
  margin: 1em 0;
  border-bottom: 1px solid #ccc;
}
.category-item .item-pic img {
  height: 6em;
  width: 6em;
  border-radius: 0.6em;
}

.item-text {
  margin-left: 1em;
  color: #fff;
  font-size: 13px;
}
.item-text .item-avatar {
  display: flex;
  align-items: center;
  margin: 0.8em 0;
}
.item-text .item-avatar img {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  margin-right: 0.5em;
}
</style>