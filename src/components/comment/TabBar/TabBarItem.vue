<template>
  <div class="tab-bar-item" @click="ClickPath">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :class="{active:isActive}" class="item-name"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String
  },
  computed: {
    isActive(){
      return this.$route.path === this.path
    }
  },
  methods: {
    ClickPath(){
      if(this.$route.path !== this.path){
        this.$router.push(this.path)
      }
    }
  }
};
</script>

<style lang="less">
.tab-bar-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 49px;
  
  padding:3px 0;
  img {
    height: 25px;
    width: 25px;
  }
  .item-name{
    font-size: 13px;
    color: #ccc;
  }
}

.active div{
  color: #CD1E07;
  
}
</style>