import { requestPost } from '../requestPost'

// 提交登录信息
export function loginPost(phone, password) {
    return requestPost({
        url: "/login/cellphone",
        data: {
            phone: phone,
            password: password
        }
    })
}

// 退出登录 /logout
export function logoutPost() {
    return requestPost({
        url: "/logout"
    })
}