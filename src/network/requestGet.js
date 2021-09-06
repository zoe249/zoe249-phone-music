import axios from 'axios'

export function requestGet(config) {
    const instanceget = axios.create({
        baseURL: "https://autumnfish.cn/"
    })

    instanceget.interceptors.request.use(config => {
        return config
    }, err => {

    })

    instanceget.interceptors.response.use(res => {
        return res
    }, err => {

    })
    return instanceget(config)
}