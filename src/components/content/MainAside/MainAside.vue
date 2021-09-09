<template>
  <div class="main-aside" 
  :class="{asideActive:asideActive}"
  @click="asideNoShow">
      
  </div>
</template>

<script>
export default {
    data () {
        return {
            asideActive:false
        }
    },
    methods:{
        asideNoShow(){
            this.asideActive = false
            console.log(this.asideActive)
        },
        asideShow(){
            this.asideActive = true
        }
    }
}
</script>

<style lang="less" scoped>
.main-aside{
    height: 100vh;
    width: 250px;
    background-color: rgba(255, 255, 255, .9);
    z-index: 99;
    position: absolute;
    transform: translateX(-250px);
    transition: all .5s;
}
.asideActive{
    height: 100vh;
    width: 250px;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(12px);
    z-index: 99;
    position: absolute;
    transform: translateX(0px);
}
</style>