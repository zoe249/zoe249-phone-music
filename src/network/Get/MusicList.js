import { requestGet } from '../requestGet'
import { requestPost } from '../requestPost'


export function playListGet(id, cookie) {
    return requestGet({
        url: "/playlist/detail",
        params: {
            id: id,
            cookie: cookie
        }
    })
}