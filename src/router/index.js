import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('@/views/Home/home.vue')
const Follow = () =>
    import ('@/views/Follow/follow.vue')
const Live = () =>
    import ('@/views/Live/live.vue')
const Music = () =>
    import ('@/views/Music/music.vue')
const Video = () =>
    import ('../views/Video/video.vue')
const Login = () =>
    import ('@/views/Login/login.vue')
const Search = () =>
    import ('@/views/Search/Search.vue')
Vue.use(VueRouter)

const routes = [{
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
        path: "/music",
        component: Music,
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.options) {
        const cookieStr = localStorage.getItem('cookie')
        if (!cookieStr) return next("/login")
        next()
    } else {
        return next()
    }
})

export default router