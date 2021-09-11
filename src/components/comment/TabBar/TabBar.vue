<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#tab-bar {
  height: 49px;
  
  position:absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
    box-shadow: 0px -3px 5px rgb(14, 13, 13);
}
</style>