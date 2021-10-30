<template>

      <video 
      ref="video"
      :height="videoData.data.height" 
      :poster="videoData.data.coverUrl" 
      :width="videoData.data.width" 
      :src="videoData.data.url"></video>

</template>

<script>
export default {
    props:{
        videoData:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        play(){
            this.$refs.video.play()
            console.log(this.$refs.video)
        }
    }
}
</script>

<style lang="less">

</style>