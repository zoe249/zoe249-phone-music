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
        <input type="text" :value="SearchDefault.showKeyword" @focus="searchT" />
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
          <input
            type="text"
            autofocus="autofocus"
            v-model="inputValue"
            @focus="SarchFocus"
          />
        </div>
      </div>
      <div class="seachFot" v-show ="isseachFot">
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
          v-for="(item, index) in suggestList"
          :key="index"
          @click="serchClick(item.keyword)"
        >
          <div class="suggest-item-img">
            <img src="@/assets/img/main/search.png" alt="" />
          </div>
          <div class="suggest-item-text">{{ item.keyword }}</div>
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { getSearchHot,getSearchDefault,getSuggest } from "@/network/Get/MainTop";
export default {
  data() {
    return {
      // 搜索框
      isTopSearch: true,
      // 搜索建议
      isseachFot:false,
      // 默认搜索提示
      SearchDefault:{},
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
    this.getSearchDefault()
  },
  computed: {},
  watch: {
    inputValue() {
      this.getSuggest(this.inputValue);
      // this.SuggestShow()
      console.log(this.inputValue);
    },
  },
  methods: {
    // 判断热搜和搜索建议
    SuggestShow() {
      if (this.inputValue.length === 0) {
        this.isSuggest = true;
      } else {
        this.isSuggest = false;
      }
    },
    // 显示搜索
    searchT() {
      this.isTopSearch = false;
      this.isseachFot = true
    },
    // 关闭搜索
    searchF() {
      this.isTopSearch = true;
      this.isseachFot = false
    },

    // 搜索框获得焦点
    SarchFocus() {
      this.isSuggest = true;
      this.getSearchHot();
    },
    // 默认搜索提示
    getSearchDefault(){
      getSearchDefault().then(res=>{
        console.log(res)
        this.SearchDefault = res.data.data
      })
    },
    // 热搜列表
    getSearchHot() {
      getSearchHot().then((res) => {
        this.serchHots = res.data.result.hots;
        console.log(this.serchHots);
      });
    },
    // 搜索建议
    getSuggest(keywords) {
      this.isSuggest = false;
      setTimeout(() => {
        getSuggest(keywords).then((res) => {
          if(res.data.result.allMatch){
            this.suggestList = res.data.result.allMatch;
          }else{
            this.suggestList[0].keyword = '暂无内容'
            console.log(this.suggestList)
          }            
        });
      }, 500);

      // this.isSuggest = true;
    },
    // 搜索
    serchClick(name) {
      this.inputValue = name
      this.isseachFot = false
      console.log(name);
    },
  },
};
</script>

<style lang="less">
.main-top {
  z-index: 99;
  
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
  box-shadow: 0px 1px 5px rgb(53, 53, 53);
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
  z-index: 99;
}
.main-searchiup input {
  border: none;
  border-radius: 15px;
  height: 30px;
  width: 230px;
  // color: #fff;
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
  padding-left: 30px;
  background-color: rgba(121, 120, 125, 0.5);
  color: #ccc;
  font-size: 13px;
  line-height: 25px;
}

// 站位
.main-none {
  flex: 2;
  text-align: center;
}

// 真正的搜索框
.serch-Main {
  z-index: 99;
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