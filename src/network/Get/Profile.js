import { requestPost } from '../requestPost'

// 获取用户详情
export function profileDetail(uid, cookie) {
    return requestPost({
        url: "/user/detail",
        data: {
            uid: uid,
            cookie: cookie
        }
    })
}

// 喜欢的音乐
// /likelist?uid=32953014
export function profileLikelist(uid, cookie) {
    return requestPost({
        url: "/likelist",
        data: {
            uid: uid,
            cookie: cookie
        },
        xhrFields: { withCredentials: true }
    })
}

// 获取用户歌单
// /user/playlist
export function profilePlaylist(uid, cookie) {
    return requestPost({
        url: "/user/playlist",
        data: {
            uid: uid,
            cookie: cookie
        }
    })
}