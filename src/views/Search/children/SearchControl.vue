<template>
  <div class="search-control">
      <div class="control-item" 
      v-for="(item,index) in titles"
       :key="index"
       :class="{trolActive:trolIndex === index}"
       @click="trolClick(index)">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            trolIndex:0
        }
    },
    methods: {
        trolClick(index){
            this.trolIndex = index
            // console.log(this.trolIndex)
            this.$emit("trolClick",index)
        }
    }
}
</script>

<style>
.search-control {
  height: 35px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-item{
    margin: 0 15px;
    /* color: fuchsia; */
    font-size: 15px;
    padding-bottom: 2px;
    /* border-bottom: fuchsia 2px solid; */
}
.trolActive{
    color: red;
    border-bottom: red 2px solid;
}
</style>