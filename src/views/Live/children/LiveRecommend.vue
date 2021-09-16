<template>
  <div class="recommend-content-main">
            <div
              class="recommend-item"
              v-for="(item, index) in liveRecommend"
              :key="index"
            >
              <div class="item-pic">
                <img v-lazy="item.program.coverUrl" alt="" />
              </div>
              <!-- 文字内容 -->
              <div class="item-text">
                <div>{{item.program.name}}</div>
                <div class="item-avatar">
                  <img v-lazy="item.program.dj.avatarUrl" alt="">
                  <span>{{item.program.dj.nickname}}</span>
                </div>
                <div>{{item.program.description}}</div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    props:{
        liveRecommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
.recommend-content-main {
  width: 94vw;
  margin-left: 3vw;
  margin-top: 1em;
}
.recommend-item {
  display: flex;
  align-items: center;
  height: 7em;
  // background-color: aliceblue;
  margin: 1em 0;
  border-bottom: 1px solid #ccc;
}
.recommend-item .item-pic img {
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
.item-text div:first-child{
  // color: #97d0ee;
  width: 16em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.item-text div:nth-child(3){
  width: 16em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>