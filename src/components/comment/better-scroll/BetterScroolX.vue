<template>
  <div class="wrapper" ref="wrapperx">
    <div class="content">
      <slot></slot>
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
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapperx, {
        click: true,
        scrollX: true,
        probeType: 3,
        
      });
    //   this.bs.on('scrollStart', () => {
    //       console.log('scrollStart-')
    //     })
    //     this.bs.on('scroll', ({ y }) => {
    //       console.log('scrolling-')
    //     })
    //     this.bs.on('scrollEnd', () => {
    //       console.log('scrollingEnd')
    //     })
    });
  },
};
</script>

<style lang="less" scoped>
.content{
  display: inline-block;
}
</style>