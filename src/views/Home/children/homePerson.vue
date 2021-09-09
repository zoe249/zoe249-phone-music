<template>
  <div class="home-person-main">
    <div class="person-title">
      <h3>推荐歌单</h3>
    </div>
    <div class="person-scroll-main">
      <b-scroll-x class="person-content" ref="scroll">
        <div class="home-person">
          <div
            class="person-item"
            v-for="(item, index) in Person"
            :key="index"
            @click="musicListId(item.id)"
          >
            <div class="person-item-img">
              <img v-lazy="item.picUrl" alt="" />
            </div>
            <span class="person-item-text">{{ item.name }}</span>
          </div>
        </div>
      </b-scroll-x>
    </div>
  </div>
</template>

<script>
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  props: {
    Person: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted(){
    this.personScroll()
  },
  methods: {
    musicListId(id) {
      console.log(id)
    },
    // 解决滑动问题，手动刷新
    personScroll(){
      setTimeout(()=>{
        this.$refs.scroll.refresh()
      },500)
    }
  },
  components: {
    BScrollX,
  },
};
</script>

<style lang="less" scoped>
// 推荐歌单
h3 {
  color: #fff;
  margin-left: 2px;
}
.home-person-main {
  padding-top: 10px;
  // background-color: #00000090;
  background-color: rgba(0, 0, 0, 0.2);
  height: 200px;
  margin-top: 20px;
  border-radius: 15px;
}
.person-scroll-main {
  // white-space: nowrap;
}
.person-content {
  margin-top: 15px;
}
.person-content .home-person {
  display: flex;
}
.person-content .home-person .person-item {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 125px;
  // margin-right: ;
}
.person-item .person-item-img {
  img {
    width: 110px;
    height: 110px;
    border-radius: 10px;
    // display: inline-block;
    // word-wrap: break-word;
  }
}
.home-person .person-item .person-item-text {
  // height: 35px;
  width: 110px;
  color: #fff;
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>