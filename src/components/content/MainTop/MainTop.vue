<template>
  <div class="main-top">
    <div class="serch-false" v-if="isTopSearch">
      <!-- 侧边栏 -->
      <div class="main-aside">
        <div class="aside-show">
          <img src="@/assets/img/aside/aside.png" alt="" />
        </div>
      </div>
      <!-- 纯属摆设 -->
      <div class="main-searchiup">
        <input type="text" placeholder="大家都在搜" @focus="searchT" />
      </div>
      <!-- 占位 -->
      <div class="main-none"></div>
    </div>

    <!-- 搜索 -->
    <div class="serch-Main" v-else>
      <!-- 顶部搜索栏 -->
      <div class="searchInput">
        <div class="serch-back" @click="searchF">
          <img src="@/assets/img/main/back.png" alt="" />
        </div>
        <div class="search-input">
          <input type="text" v-model="inputValue" @focus="SarchFocus" />
        </div>
      </div>
      <!-- 热搜列表 -->
      <div class="search-suggest" v-if="isSuggest">
        <div
          class="suggest-item"
          v-for="(item, index) in serchHots"
          :key="index"
          @click="serchClick(item.first)"
        >
          <div class="suggest-item-img">
            <img src="@/assets/img/main/search.png" alt="" />
          </div>
          <div class="suggest-item-text">{{ item.first }}</div>
        </div>
      </div>
      <!-- 搜索建议 -->
      <div class="search-suggest" v-else>
        <div
          class="suggest-item"
          v-for="(item, index) in serchHots"
          :key="index"
          @click="serchClick(item.first)"
        >
          <div class="suggest-item-img">
            <img src="@/assets/img/main/search.png" alt="" />
          </div>
          <div class="suggest-item-text">暂无</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchHot } from "@/network/Get/MainTop";
import { getSuggest } from "@/network/Get/MainTop";
export default {
  data() {
    return {
      // 搜索框
      isTopSearch: true,
      //   热搜列表
      serchHots: [],
      // 搜索讲义
      suggestList: [],
      // 搜索建议
      isSuggest: false,
      // 输入内容
      inputValue: "",
    };
  },
  created() {
    this.getSearchHot();
    
  },
  computed: {},
  watch: {
    inputValue() {
        this.getSuggest(this.inputValue)
    },
  },
  methods: {
    searchT() {
      this.isTopSearch = false;
    },
    searchF() {
      this.isTopSearch = true;
    },

    // 搜索框获得焦点
    SarchFocus() {
      this.isSuggest = true;
    },
    // 热搜列表
    getSearchHot() {
      getSearchHot().then((res) => {
        console.log(res);
        this.serchHots = res.data.result.hots;
        console.log(this.serchHots);
      });
    },
    // 搜索建议
    getSuggest(keywords) {
      getSuggest(keywords).then((res) => {
        console.log(res);
        
      });
    },
    // 搜索
    serchClick(name) {
      console.log(name);
    },
  },
};
</script>

<style lang="less">
.main-top {
}
.serch-false {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 49px;
  // background-color: aquamarine;
  display: flex;
  align-items: center;
}
// 侧边栏按钮
.main-aside {
  color: #fff;
  text-align: center;
  flex: 2;
}
.aside-show {
  margin-left: 15px;
  line-height: 40px;
  width: 28px;
  height: 28px;
  img {
    height: 100%;
    width: 100%;
  }
}

// 搜索框
.main-searchiup {
  flex: 9;
  text-align: center;
}
.main-searchiup input {
  border: none;
  border-radius: 15px;
  height: 30px;
  width: 230px;
}
.main-searchiup::before {
  content: "";
  position: absolute;
  background-image: url("../../../assets/img/main/search.png");
  background-size: 15px 15px;
  width: 15px;
  height: 15px;
  top: 17px;
  margin-left: 10px;
}
.main-searchiup input {
  padding-left: 28px;
  background-color: rgba(121, 120, 125, 0.5);
  color: #fff;
  font-size: 15px;
  line-height: 25px;
}

// 站位
.main-none {
  flex: 2;
  text-align: center;
}

// 真正的搜索框
.serch-Main {
  position: absolute;
  height: 49px;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(146, 146, 146, 0.2);
  backdrop-filter: blur(13px);
}
.searchInput {
  display: flex;
  align-items: center;
  height: 49px;
}
.searchInput .serch-back {
  height: 30px;
  width: 30px;
  flex: 1;
  margin-left: 10px;
  img {
    height: 30px;
    width: 30px;
  }
}
.searchInput .search-input {
  flex: 8;
  margin-right: 10px;
}
.searchInput .search-input input {
  border: 0;
  width: 100%;
  height: 30px;
  background-color: rgba(146, 146, 146, 0.1);
  border-bottom: 1px solid #fff;
  padding-left: 10px;
  color: #fff;
  font-size: 15px;
}

// 搜索建议
.search-suggest {
  margin: 0 10px;
}
.search-suggest .suggest-item {
  display: flex;
  align-items: center;
  height: 45px;
  //   background-color: rosybrown;
}
.search-suggest .suggest-item .suggest-item-img {
  height: 20px;
  width: 20px;
  img {
    height: 20px;
    width: 20px;
  }
}
.search-suggest .suggest-item .suggest-item-text {
  width: 100%;
  line-height: 45px;
  margin-left: 10px;
  border-bottom: 1px solid rgba(146, 146, 146, 0.5);
  color: #fff;
  font-size: 15px;
}
</style>