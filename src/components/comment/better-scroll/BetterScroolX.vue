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
  watch: {},
  mounted() {
    this.onscroll();
    this.refresh();
    // console.log(this.scrollWidth())
    // console.log(this.$refs.wrapperx.scrollWidth + "fu");
    // console.log(this.$refs.wrapperx.clientWidth + "zi");
  },
  methods: {
    onscroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapperx, {
            click: true,
            scrollX: true,
            probeType: 3,
            observeDOM:true
            
          });
          this.refresh();
        } else {
          this.refresh();
        }
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      
    },
    scrollWidth() {
      console.log(this.$refs.wrapperx.scrollWidth);
      return this.$refs.wrapperx.scrollWidth;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: inline-block;
}
</style>