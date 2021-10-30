import { requestPost } from '../requestPost'


// 视频标签
export function videoGroup(cookie) {
    return requestPost({
        url: "/video/category/list",
        data: {
            cookie: cookie
        }
    })
}

// 视频标签内容/video/group?id=9104
export function videoGroupId(id, offset, cookie) {
    return requestPost({
        url: "/video/group",
        data: {
            id: id,
            offset: offset,
            cookie: cookie,
        }
    })
}

// 获取视频详细内容
export function videoDetail(id) {
    return requestPost({
        url: "/video/detail",
        data: {
            id: id
        }
    })
}

// 获取视频播放url
export function videoUrl(id) {
    return requestPost({
        url: "/video/url",
        data: {
            id: id
        }
    })
}