import { requestGet } from '../requestGet'

/*
    搜索
    /cloudsearch?keywords= 海阔天空
    limit : 返回数量 , 默认为 30 
    offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
    type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
*/
export function getSearch(keywords, limit, type, offset) {
    return requestGet({
        url: "/cloudsearch",
        params: {
            keywords: keywords,
            limit: limit,
            offset: offset,
            type: type
        }
    })
}