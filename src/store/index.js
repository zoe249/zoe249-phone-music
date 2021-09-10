import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginState: {
            loging: false,
            // 保存用户id
            userId: null,
            // 用户信息
            user: null,
            // 保存cookie
            cookie: null,
            // 用户头像
            avatarUrl: null,
            // 用户昵称
            Nickname: null
        }
    },
    getters: {
        // 是否登录
        saveLogin(state) {
            if (localStorage.getItem('cookie') && localStorage.getItem('cookie') !== null) {
                state.loginState.loging = true
            } else {
                state.loginState.loging = false
            }
            return state.loginState.loging
        },
        // 保存cookie
        saveCookie(state) {
            if (localStorage.getItem('cookie')) {
                state.loginState.cookie = localStorage.getItem('cookie')
                console.log(123 + "cookie")
            }
            return localStorage.getItem('cookie')
        },
        //保存用户id
        saveUserId(state) {
            if (localStorage.getItem('userId')) {
                state.loginState.userId = localStorage.getItem('userId')
            }
            return state.loginState.userId
        },
        // 保存用户头像
        saveAvatar(state) {
            if (localStorage.getItem('avatarUrl')) {
                state.loginState.avatarUrl = localStorage.getItem('avatarUrl')
            }
            return state.loginState.avatarUrl
        },
        // 保存用户昵称
        saveNickname(state) {
            if (localStorage.getItem('Nickname')) {
                state.loginState.Nickname = localStorage.getItem('Nickname')
            }
            return state.loginState.Nickname
        }
    },
    mutations: {
        saveAdd(state, data) {
            state.loginState.user = data.profile
            state.loginState.userId = state.loginState.user.userId
            state.loginState.cookie = data.cookie
        },
    },
    actions: {},
    modules: {}
})