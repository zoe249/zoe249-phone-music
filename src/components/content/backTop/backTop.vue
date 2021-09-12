<template>
  <div class="back-top" >
    <img src="@/assets/img/main/backTop.svg" alt="" />
  </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
};
</script>

<style lang="less" scoped>
.back-top {
    display: block;
  position: fixed;
  bottom: 100px;
  right: 30px;
//   z-index: 150;
  img {
    height: 45px;
    width: 45px;
  }
}
</style>