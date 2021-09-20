<template>
  <div class="video-group">
        <div class="group-item" 
        v-for="(item, index) in groupList" 
        :key="index"
        @click="groupClick(item.id)"
        :class="{groupActive:groupId === item.id}">
          {{ item.name }}
        </div>
      </div>
</template>

<script>
export default {
    props:{
        groupList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            groupId:"58100",
            // itemId:"58100"      
        }
    },
    methods: {
        groupClick(id){
            // console.log(id)
            this.groupId = id
            this.$emit('groupClick',id)
        }
    }
}
</script>

<style lang="less">
.video-group {
  height: 3em;
  width: 800px;
  // margin-left: 3vw;
  // background-color: #fff;
  display: flex;
  align-items: center;
}
.video-group .group-item {
  margin: 0 1em;
  height: 2em;
  line-height: 2em;
  padding: 0 1em;
  font-size: 13px;
  border-radius: 15px;
  font-weight: 700;
  color: #ccc;
}
.video-group .groupActive{
    background-color: rgba(238, 90, 90, 0.144);
    color: rgb(243, 63, 63);
}
</style>