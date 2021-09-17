<template>
  <div class="profile-playlist">
        <div class="user-mlist-tab">
          <span>用户歌单</span>
          <!-- <span>用户歌单</span>
          <span>用户歌单</span> -->
        </div>

        <div class="user-mlist">
          <div
            class="playlist-item"
            v-for="(item, index) in userPlaylist"
            :key="index"
            @click="ClickUserPlay(item.id)"
          >
            <div class="playlist-pic">
              <img :src="item.coverImgUrl" alt="" />
            </div>
            <div class="playlist-text">
              <div class="playlist-name">{{ item.name }}</div>
              <div class="playlist-tracks">{{ item.trackCount }}首</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props:{
        userPlaylist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
        ClickUserPlay(id){
            console.log(id)
            this.$router.push(`/musiclist?id=${id}`)
        }
    }
}
</script>

<style>

</style>