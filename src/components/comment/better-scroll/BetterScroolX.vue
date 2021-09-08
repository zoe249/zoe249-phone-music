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
  watch: {
    'scroll'(){
      this.onscroll()
    }
  },
  mounted() {
    this.onscroll()
    console.log(this.$refs.wrapperx.scrollWidth + "fu");
    console.log(this.$refs.wrapperx.clientWidth + "zi");
  },
  methods: {
    onscroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapperx, {
            click: false,
            scrollX: true,
            probeType: 3,
          });
        }else{
          this.scroll.refresh()
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: inline-block;
}
</style>