<template>
  <div class="search-album">
    <div class="search-album">
      <div
        class="search-album-item"
        v-for="(item, index) in searchAlbum"
        :key="index"
        @click="albumClick(item.id)"
      >
        <div class="album-item-icon">
          <img v-lazy="item.picUrl" alt="" />
        </div>
        <div class="album-item-text">
          <span>{{ item.name }}</span>
          <div class="album-item-count">
            <span>{{ item.artist.name}}</span>
            <span>{{ item.publishTime |LocaleDateString}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchAlbum: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
      albumClick(id){
          console.log(id)
      }
  }
};
</script>

<style>
.search-album {
}
.search-album-item {
  /* background-color: rosybrown; */
  height: 60px;
  display: flex;
  align-items: center;
}
.album-item-icon {
  width: 50px;
  height: 50px;
}
.album-item-icon img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}
.album-item-text {
  margin-left: 10px;
}
.album-item-text span {
  color: #fff;
  font-size: 15px;
}
.album-item-text .album-item-count span {
  color: #ccc;
  margin-top: 8px;
  font-size: 10px;
  /* margin-right: 15px; */
}
.album-item-text .album-item-count span:nth-child(1){
    margin-right: 15px;
    color: #9cdcfe;
}
</style>