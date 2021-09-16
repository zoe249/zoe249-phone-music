<template>
  <div class="live-tab">
    <div
      class="live-tab-item"
      :class="{liveTabActive:livetabIndex === index}"
      v-for="(item, index) in titles"
      :key="index"
      @click="ClickLiveTab(index)"
    >
      <h3>{{ item }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        livetabIndex:1,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ClickLiveTab(index) {
      this.livetabIndex = index
    },
  },
};
</script>

<style>
.live-tab {
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
}
h3 {
  margin: 0 0.5em;
  padding-bottom: 3px;
  color: #fff;
  /* border-bottom: 2px solid #ccc; */
}
.live-tab .liveTabActive h3{
    color: red;
    border-bottom: 2px solid red;
}
</style>

