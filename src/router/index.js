import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('@/views/Home/home.vue')
const Follow = () =>
    import ('@/views/Follow/follow.vue')
const Live = () =>
    import ('@/views/Live/live.vue')
const Profile = () =>
    import ('@/views/Profile/profile.vue')
const Video = () =>
    import ('../views/Video/video.vue')
const Login = () =>
    import ('@/views/Login/login.vue')
const Search = () =>
    import ('@/views/Search/Search.vue')
const MusicList = () =>
    import ('@/views/MusicList/MusicList.vue')
Vue.use(VueRouter)

const routes = [{
        path: "",
        redirect: "/home"
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/follow",
        component: Follow,
        meta: { options: "login" }
    },
    {
        path: "/live",
        component: Live,
        meta: { options: "login" }
    },
    {
        path: "/profile",
        component: Profile,
        meta: { options: "login" }
    },
    {
        path: "/video",
        component: Video,
        meta: { options: "login" }
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: '/musiclist',
        component: MusicList,
        // meta: { options: "login" }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    document.title = "你那天在脸红什么"
    if (to.meta.options) {
        const cookieStr = localStorage.getItem('cookie')
        if (!cookieStr) return next("/login")
        next()
    } else {
        return next()
    }
})

export default router