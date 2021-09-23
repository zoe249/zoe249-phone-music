<template>
  <div class="main-aside" :class="{ asideActive: asideActive }">
    <div class="aside-bg">
      <!-- <img src="../../../assets/img/aside/aside-bg.jpg" alt=""> -->
      <div class="aside-false" @click="asideNoShow">
        <img src="../../../assets/img/aside/aside-false.png" alt="" />
      </div>
    </div>
    <div class="login-true" v-if="loging()">
      <!-- 用户信息 -->
      <div class="aside-user">
        <div class="user-avatar">
          <img :src="saveAvatar()" alt="" />
        </div>
        <span>{{ saveNickname() }}</span>
      </div>
      <!-- 退出登录按钮 -->
      <div class="aside-outlog" @click="clickOutlog">退出登录 / 关闭</div>
    </div>
    <div class="login-false" v-else>
      <div class="aside-login" @click="Clicklogin">登录</div>
    </div>
  </div>
</template>

<script>
import { logoutPost } from "@/network/Get/Login";
export default {
  data() {
    return {
      asideActive: false,
    };
  },
  created() {
    // console.log(this.loging());
  },
  methods: {
    asideNoShow() {
      this.asideActive = false;
      console.log(this.asideActive);
    },
    asideShow() {
      this.asideActive = true;
    },
    // 返回登录状态
    loging() {
      return this.$store.getters.saveLogin;
    },
    // 用户头像
    saveAvatar() {
      return this.$store.getters.saveAvatar;
    },
    // 用户昵称
    saveNickname() {
      return this.$store.getters.saveNickname;
    },
    updatelogMess() {
      this.loging();
      this.saveAvatar();
      this.saveNickname();
    },

    // 退出登录 按钮
    clickOutlog() {
      this.logoutPost();
      localStorage.clear();
      // 更新数据
      this.updatelogMess();
    },
    // 退出
    logoutPost() {
      logoutPost().then((res) => {});
    },
    Clicklogin(){
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="less" scoped>
.main-aside {
  height: 100vh;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: absolute;
  transform: translateX(-270px);
  transition: all 0.5s;
}
.asideActive {
  height: 100vh;
  width: 270px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  z-index: 99;
  position: absolute;
  transform: translateX(0px);
}
.aside-bg {
  position: absolute;
  background-image: url("");
  position: relative;
  img {
    height: 150px;
    width: 270px;
  }
}
.aside-false img {
  height: 25px;
  width: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
}

// 用户信息
.aside-user {
  top: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 15px;
}
.user-avatar img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.aside-user span {
  font-size: 18px;
  margin-left: 10px;
}

// 退出
.aside-outlog {
  position: absolute;
  margin-left: 25px;
  color: rgb(180, 11, 11);
  bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 45px;
  width: 220px;
  height: 45px;
  // background: #fff;
  border: 1px solid #fff;
  background-color: rgba(145, 145, 145, 0.1);
  border-radius: 10px;
}

.login-false .aside-login{
  height: 45px;
  width: 150px;
  border: 2px solid #FF9500;
  color: #FF9500;
  font-size: 18px;
  font-weight: 600;
  line-height: 45px;
  margin-left: 55px;
  margin-top: 12px;
  border-radius: 10px;
}
</style>