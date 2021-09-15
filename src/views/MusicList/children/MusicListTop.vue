<template>
      <!-- 顶部信息 -->
    <div class="music-top-pic">
      <div class="music-top-flex">
        <div class="top-pic-img" @click="musicBigShow">
          <img :src="musiclist.coverImgUrl" alt="" />
        </div>
        <div class="top-pic-text">
          <div class="pic-text-name">{{ musiclist.name}}</div>
          <div class="pic-text-anthor">
            <img :src="musicauthor.avatarUrl" alt="" />
            <span>{{musicauthor.nickname}}</span>
          </div>
          <div class="pic-text-title" @click="musicBigShow">{{musiclist.description}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        musiclist:{
            type:Object,
            default(){
                return {}
            }
        },
        musicauthor:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
      musicBigShow(){
        this.$emit("musicBigShow")
      }
    }
}
</script>

<style lang="less">
// 大图片与歌单信息
.music-top-pic {
  // position: absolute;
  top: 0;
  height: 15.5em;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(12px);
  display: flex;
  align-items:center;
}
.music-top-flex {
  display: flex;
  align-items:initial;
  height: 8em;
  margin: 0 10px;
}

.top-pic-img {
  height: 8em;
  width: 8em;
}
.top-pic-img img {
  height: 8em;
  width: 8em;
  border-radius: 10px;
}
.top-pic-text {
  width: 13em;
  margin-left:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pic-text-name {
    color: #fff;
    margin-top: 0.5em;
}
.pic-text-anthor{
    display: flex;
    align-items: center;
    img{
        height: 1.8em;
        width: 1.8em;
        border-radius: 50%;
        margin-right: .8em;
    }
    span{
        color: #ccc;
        font-size: 12px;
    }
}
.pic-text-title{
    color: #ccc;
    font-size: 12px;
    text-overflow: ellipsis;
    // width: 13em;
    overflow: hidden;
    white-space:nowrap;

}
</style>