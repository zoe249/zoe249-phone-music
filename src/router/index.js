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

Vue.use(VueRouter)

const routes = [{
        path: "/home",
        component: Home
    },
    {
        path: "/follow",
        component: Follow,
    },
    {
        path: "/live",
        component: Live
    },
    {
        path: "/music",
        component: Music
    },
    {
        path: "video",
        component: Video
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router