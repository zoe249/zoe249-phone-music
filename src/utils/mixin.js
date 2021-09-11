import { debounce } from '@/common/utils'

export const itemListenerMixin = {
    data() {
        return {
            ItemImgListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh())

        this.ItemImgListener = () => {
            this.newRefresh()
        }
    }
}