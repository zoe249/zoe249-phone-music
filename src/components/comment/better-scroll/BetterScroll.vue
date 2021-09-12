<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import observeDOM from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true,
        observeDOM:true
      });

      this.scroll.on("scroll", (position) => {
        this.$emit('scroll',position)
      });

      // 监听上拉事件
      // if(this.pullUpLoad){
      this.scroll.on("pullingUp", () => {
        this.$emit('pullingUp')
        this.finishPullUp();
      });
      // }
    });
  },
  methods: {
    scrollTo(x,y,time = 500){
      this.scroll && this.scroll.scrollTo(x,x,time)
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log(this.scroll);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style lang="less" scoped>
</style>