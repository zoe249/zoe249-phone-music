<template>
  <div class="login">
    <div class="login-box">
      <h3>LOGIN</h3>
      <div class="input-username">
        <input type="text" v-model="phone" placeholder="请输入手机号"/>
      </div>
      <div class="input-password">
        <input type="password" v-model="password" placeholder="请输入密码"/>
      </div>
      <!-- 登录信息 -->
      <div class="login-state-show">
          <div class="login-success" v-show="loginSuccess">
              <img src="../../assets/img/login/success.svg" alt=""> 
              <span>登录成功</span>
          </div>
          <div class="login-error" v-show="loginError">
              <img src="../../assets/img/login/error.svg" alt="">
              <span>登录失败, 请重试</span>
          </div>
      </div>
      <div class="input-button" @click="buttonLogin">
          <input type="button" value="登录">
      </div>
    </div>
  </div>
</template>

<script>
import {loginPost} from '@/network/Get/Login'
export default {
    data () {
        return {
            phone:"13546175424",
            password:"qq1421759951",
            loginSuccess:false,
            loginError:false,
        }
    },
    created () {
      
    },
    methods:{
        // 点击登录
        buttonLogin(){
            this.loginPost(this.phone,this.password)  
        },
        loginPost(phone,password){
            loginPost(phone,password).then(res=>{
                console.log(res)
                if(res.data.code !== 200){
                    this.loginError = true;
                    setTimeout(()=>{
                        this.loginError = false
                    },2000)
                }else{
                    this.loginSuccess = true;
                    localStorage.setItem('cookie',res.data.cookie)
                    localStorage.setItem('userId',res.data.profile.userId)
                    localStorage.setItem('avatarUrl',res.data.profile.avatarUrl)
                    localStorage.setItem('Nickname',res.data.profile.nickname)
                    this.$store.commit('saveAdd',res.data)
                    setTimeout(()=>{
                        this.loginSuccess = false
                        this.phone = "",
                        this.password = ""
                        this.$router.push('/home')
                    },2000)
                }
                
            })
        }
    }
};
</script>


<style lang="less" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 102;
  // background: violet;
  background-image: url(".././../assets/img/bg/login.jpg");
  background-size: 100vw, 100vh;
}
.login-box {
  height: 300px;
  width: 95vw;
  background-color: #00000090;
  margin-top: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 15px;
  position: relative;
}
.login-box h3{
    color: white;
    padding-top: 20px;
    margin:20px 0;
}

.input-username input{
    border:none;
    height: 30px;
    background-color: #00000000;
    border-bottom: 1px solid #ccc;
    color: #fff;
    // font-size: 13px;
    padding-left: 30px;
}
.input-username::before{
    content:" ";
    position:absolute ;
    background-image: url("../../assets/img/login/password.svg");
    top: 66px;
    left: 66px;
    height: 20px;
    width: 20px;
    background-size: 20px 20px;
}
.input-password input{
    border: none;
    height: 30px;
    margin-top: 15px;
    background-color: #00000000;
    border-bottom: 1px solid #ccc;
    color: #fff;
    // font-size: 13px;
    padding-left: 30px;
}
.input-password::before{
    content:" ";
    position:absolute ;
    background-image: url("../../assets/img/login/username.svg");
    top: 109px;
    left: 66px;
    height: 20px;
    width: 20px;
    background-size: 20px 20px;
}
.input-button input{
    position: relative;
    border: none;
    margin-top: 20px;
    height: 30px;
    width: 90px;
    color: #00000090;
    font-size: 18px;
    font-weight: 600;
    border-radius:16px ;
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}

// 提示信息
.login-success{
    color: #74ebd5;
    font-size: 13px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    width: 150px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    img{
        height: 12px;
        margin-right: 5px;
    }
}
.login-error{
    color: red;
    font-size: 13px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    width: 150px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    // line-height: 20px;
    color: #74ebd5;
    font-size: 13px;
    display: flex;
    img{
        height: 12px;
        margin-right: 5px;
    }
}
</style>