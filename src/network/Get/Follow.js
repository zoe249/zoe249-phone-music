import { requestPost } from '../requestPost'


// 获取用户关注列表
export function followList(uid, cookie) {
    return requestPost({
        url: "/user/follows",
        data: {
            uid: uid,
            cookie: cookie
        }
    })
}
// 关注歌手新歌/artist/new/song
export function artistSong(limit, cookie) {
    return requestPost({
        url: "/artist/new/song",
        data: {
            limit: limit,
            cookie: cookie
        }

    })
}