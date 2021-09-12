<template>
  <div class="search-song" >
    <div
      class="search-song-item"
      v-for="(item, index) in searchsongList"
      :key="index"
      @click="SerchSong(item.id)"
    >
      <div class="item-name">{{ item.name }}</div>
      <div class="item-author">
        <span>{{ item.ar[0].name }}</span>
        <span> - </span>
        <span>{{ item.al.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        searchsongList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
        SerchSong(id){
            console.log(id)
        }
    }
};
</script>

<style lang="less">
// 音乐部分
.search-song {
  color: #fff;
  margin-top: 15px;
  // margin-bottom: 45px;
}
.search-song-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #ccc;
  height: 60px;
  // margin-top: 10px;
  border-bottom: 1px solid rgba(201, 201, 201, 0.377);
}
.item-name {
  font-size: 15px;
  color: #9cdcfe;
  margin-bottom: 5px;
}
.item-author {
  color: #eff0f0;
  font-size: 10px;
  // margin-top: 5px;
}
.item-author span:nth-child(1) {
  margin-right: 5px;
}
.item-author span:nth-child(2) {
  margin-right: 5px;
}
</style>