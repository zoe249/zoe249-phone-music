<template>
  <div class="content-main">
    <div
      class="category-item"
      v-for="(item, index) in liveCategory"
      :key="index"
    >
      <span
        :class="{ categoryActive: categoryType === index }"
        @click="CategoryClick(index,item.id)"
        >
        {{ item.name }}
        </span
      >
    </div>
  </div>
</template>

<script>
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  props: {
    liveCategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      categoryType: 2,
    };
  },
  methods: {
    CategoryClick(index,type) {
      // console.log(type)
      this.categoryType = index;
      this.$emit('Category',type)
    },
  },
  components: {},
};
</script>

<style lang="less">
// .wrapper-cate {
//   white-space: nowrap;
//   width: 100vw;
//   overflow: hidden;
//   // margin-left: 3vw;
//   background-color: rgba(255, 255, 255, 0.5);
//   backdrop-filter: blur(15px);
// }
// .content {
//   display: inline-block;
//   // display: flex;
//   // flex-direction: row;
//   width: 94vw;
//   margin-left: 3vw;
// }
.content-main {
  display: flex;
}
.content-main .category-item {
  margin-right: 1em;
  color: #fff;
  height: 3em;
  line-height: 3em;
}
.categoryActive {
  color: red;
}
// .category-item .category-item-true img{
//   height: 2em;
//   width: 2em;
// }
</style>