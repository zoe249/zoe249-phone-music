<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
      <h1>你那天</h1>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
  },
};
</script>

<style lang="less" scoped>
.wrapper{
  
  height: 150px;
  width: 100%;
  // background-color: chocolate;
  overflow: hidden;
}

</style>