export function debounce(func, delay) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}



import BackTop from '@/components/content/backTop/backTop.vue'
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


export const backTopMixin = {

    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 1000)
        },
        listenShoBackTop(position) {
            this.isShowBackTop = -position.y > 1000
        }
    }
}