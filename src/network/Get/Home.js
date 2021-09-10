import { requestGet } from "../requestGet";
import { requestPost } from '../requestPost'

// 请求轮播图数据
export function getHomeBanners() {
    return requestGet({
        url: "/banner?type=1"
    })
}

// 首页圆形图标入口
export function getHomeDragon() {
    return requestGet({
        url: "/homepage/dragon/ball"
    })
}

// 默认推荐歌单(未登录)
export function getHomePerson() {
    return requestGet({
        url: "/personalized",
        params: {
            // 取10条
            limit: 10
        }
    })
}

// 推荐新音乐(未登录)
export function getHomeNewsong() {
    return requestGet({
        url: "personalized/newsong?limit=9",

    })
}

// 每日推荐歌单(登录) /recommend/resource
export function HomePersonPost(cookie) {
    return requestPost({
        url: "/recommend/resource",
        data: {
            cookie: cookie
        }
    })
}

// 推荐视频(登录)
export function HomevideoPost(cookie) {
    return requestPost({
        url: "/video/timeline/recommend",
        data: {
            cookie: cookie
        }
    })
}