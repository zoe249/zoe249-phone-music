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