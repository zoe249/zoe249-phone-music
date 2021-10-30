import axios from "axios";

export function requestPost(config) {
    const instancepost = axios.create({
        baseURL: "http://localhost:3000",
        method: "post"
            // (POST请求)request body:data:{key:'aa'}
            // 注：post请求携带参数为 data:{id:}
    })
    instancepost.interceptors.request.use(config => {
        return config
    }, err => {

    })
    instancepost.interceptors.response.use(res => {
        return res
    }, err => {

    })
    return instancepost(config)
}