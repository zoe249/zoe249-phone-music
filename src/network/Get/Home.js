import { requestGet } from "../requestGet";

export function getHomeBanners() {
    return requestGet({
        url: "/banner?type=1"
    })
}