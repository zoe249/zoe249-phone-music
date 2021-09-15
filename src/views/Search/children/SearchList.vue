<template>
  <div class="search-list">
    <div
      class="search-list-item"
      v-for="(item, index) in searchList"
      :key="index"
      @click="listClick(item.id)"
    >
      <div class="list-item-icon">
        <img v-lazy="item.coverImgUrl" alt="" />
      </div>
      <div class="list-item-text">
        <span>{{ item.name }}</span>
        <div class="list-item-count">
          <span>{{ item.trackCount }}首，</span>
          <span>{{ item.creator.nickname }}，</span>
          <span>播放{{ item.playCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    // console.log(this.searchList);
  },
  methods: {
    listClick(id) {
      this.$router.push(`/musiclist?id=${id}`)
    },
  },
};
</script>

<style>
.search-list {
}
.search-list-item {
  /* background-color: rosybrown; */
  height: 60px;
  display: flex;
  align-items: center;
}
.list-item-icon {
  width: 50px;
  height: 50px;
}
.list-item-icon img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}
.list-item-text {
  margin-left: 10px;
}
.list-item-text span {
  color: #fff;
  font-size: 15px;
}
.list-item-text .list-item-count span {
  color: #ccc;
  margin-top: 8px;
  font-size: 10px;
  /* margin-right: 15px; */
}
</style>