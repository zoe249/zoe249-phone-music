<template>
  <div>
    关注
    <audio
      ref="audio"
      src="http://m7.music.126.net/20210917152540/4c1e62f2bff7867d5dcafe4ddc1a8e5a/ymusic/025e/0208/5559/544a7156375b2bdb1cebb3987a81d29d.mp3"
      controls="controls"
    ></audio>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$store)
  },
  mounted() {
    // setInterval(() => {
    //   this.Audio()
    // }, 1000);
  },
  methods: {
    Audio() {
      console.log(this.$refs.audio.currentTime);
      console.log(this.$refs.audio.duration);
      console.log(this.$refs.audio.paused);
    },
  },
};
</script>

<style lang="less">
</style>
