<template>
  <div class="wrapper">
    <b-scroll-x class="content">
      <h1>
        你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天你那天
      </h1>
    </b-scroll-x>
  </div>
</template>

<script>
import BScrollX from "@/components/comment/better-scroll/BetterScroolX.vue";
export default {
  components: {
    BScrollX,
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
  margin-top: 150px;
}
.content {
  display: inline-block;
}
</style>