<template>
  <div id="app">
    <router-view />
    <!-- 底部导航栏 -->
    <main-tab-bar/>
    <!-- 播放器 -->
    <player />
  </div>
</template>

<script>
import MainTop from '@/components/content/MainTop/MainTop.vue'
import MainTabBar from '@/components/content/MainTabBar/MainTabBar.vue'
import Player from '@/components/content/Player/player.vue'
export default {
  components:{
    MainTop,
    MainTabBar,
    Player
  }
}
</script>
<style lang="less">


</style>
