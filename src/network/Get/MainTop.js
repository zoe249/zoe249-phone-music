import { requestGet } from '../requestGet'

// 获取热搜
export function getSearchHot() {
    return requestGet({
        url: "/search/hot"
    })
}

// 搜索建议
export function getSuggest(keywords) {
    return requestGet({
        url: "/search/suggest?type=mobile",
        params: {
            keywords: keywords,

        }
    })
}