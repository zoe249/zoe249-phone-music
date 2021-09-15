import { requestGet } from "../requestGet";
import { requestPost } from '../requestPost'

export function liveRecomPost(cookie) {
    return requestPost({
        url: "/dj/recommend",
        data: {
            cookie: cookie
        }
    })
}

// 电台分类
export function liveCatePost(cookie) {
    return requestPost({
        url: "/dj/catelist",
        data: {
            cookie: cookie
        }
    })
}

// 电台推荐类型
export function liveRecoTypePost(type, cookie) {
    return requestPost({
        url: "/dj/recommend/type",
        data: {
            type: type,
            cookie: cookie
        }
    })
}

// 电台详情
export function liveDetailPost(rid, cookie) {
    return requestPost({
        url: "/dj/detail",
        data: {
            rid: rid,
            cookie: cookie
        }
    })
}



// /dj/program/toplist/hours
// 二十四小时电台
export function liveHoursGet(limit) {
    return requestGet({
        url: "dj/program/toplist/hours",
        params: {
            limit: limit,

        }
    })
}