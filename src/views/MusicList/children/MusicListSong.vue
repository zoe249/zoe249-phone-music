<template>
  <div class="music-list-song">
    <div class="song-item"
    v-for="(item,index) in musicsong" 
    :key="index"
    @click="playMusic(item.id,item.name,item.ar[0].name)">
      <div class="song-item-index">{{index + 1}}</div>
      <div class="song-item-text">
        <div class="song-item-name">{{item.name}}</div>
        <div class="song-item-singer">
          <div>{{item.ar[0].name}} </div>
          <div> {{item.al.name}}</div>
        </div>
      </div>
      <div class="song-item-comment">
        <img src="@/assets/img/main/more.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    musicsong: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // 播放音乐
    playMusic(id,name,artist){
      // console.log(id)
      let musicMes = {}
      musicMes.id = id
      musicMes.name = name
      musicMes.artist = artist
      this.$store.dispatch("getMusic",musicMes)
    },
  }
};
</script>

<style lang="less">
.music-list-song {
  // position:relative;
  width: 94vw;
  margin-left: 3vw;
//   color: aliceblue;
}
.song-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 3.5em;
  // justify-content: space-between;
}
.song-item-index {
  width: 2em;
  color: #ccc;
}
.song-item-text {
  width: 16em;
//   background: chocolate;
}

.song-item-name{
    font-size: 1em;
    width: 14em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
    color: rgb(212, 212, 212);
    margin-bottom: .5em;
}
.song-item-singer {
    display: flex;
}
.song-item-singer div{
    font-size: 0.8em;
    white-space:nowrap;
    color: rgb(129, 129, 129);
}
.song-item-singer div:first-child{
    color: #97D0EE;
}
.song-item-singer div:nth-child(2){
    margin-left: 1em;
    width: 18em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
}
.song-item-comment {
  position: absolute;
  right: 0;
  height: 1.5em;
  width: 1.5em;
  img {
    height: 1.5em;
  width: 1.5em;
  }
}
</style>