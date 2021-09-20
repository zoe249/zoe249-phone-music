import { requestGet } from '../requestGet'


// 获取音乐连接
export function getMusicUrl(id) {
    return requestGet({
        url: "/song/url",
        params: {
            id: id
        }
    })
}
// 获取歌词
export function getMusiclyric(id) {
    return requestGet({
        url: "/lyric",
        params: {
            id: id
        }
    })
}

// 获取音乐信息

export function getMusicDateil(id) {
    return requestGet({
        url: "/song/detail",
        params: {
            ids: id
        }
    })
}