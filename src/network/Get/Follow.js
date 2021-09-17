import requestPost from '../Get/Follow'


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