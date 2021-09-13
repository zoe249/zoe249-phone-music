<template>
  <div id="app">
    <router-view />
    <!-- 底部导航栏 -->
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTop from '@/components/content/MainTop/MainTop.vue'
import MainTabBar from '@/components/content/MainTabBar/MainTabBar.vue'
export default {
  components:{
    MainTop,
    MainTabBar
  }
}
</script>
<style lang="less">


</style>
