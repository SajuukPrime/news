import { Swiper, Autoplay } from "swiper"
Swiper.use([Autoplay]);
class VariableSwiper {
    constructor(el) {
        this.el = document.querySelectorAll(el)[0];
        this.li = Array.from(this.el.children)
        this.len = this.li.length;
        if (this.len > 2) {
            this.wrapperInit()
            this.domInit()
            this.swiperInit()
        }
    }
    wrapperInit() {
        const swiperWrapper = document.createElement("div")
        swiperWrapper.className = "swiper-wrapper"
        this.el.appendChild(swiperWrapper)
        return this.swiperWrapper = swiperWrapper
    }
    domInit() {
        this.li.forEach((item, index) => {
            if (index % 2 == 0) {
                const e = document.createElement("div");
                e.className = "swiper-slide"
                this.swiperWrapper.appendChild(e)
                e.appendChild(item);
            } else {
                this.el.querySelectorAll('.swiper-slide')[this.el.querySelectorAll('.swiper-slide').length - 1].appendChild(item)
            }
        })
    }
    swiperInit() {
        const mySwiper2 = new Swiper(this.el, {
            speed: 500,
            autoplay: {
                delay: 5000,
            },
            loop: true
        })
    }
}

export { VariableSwiper }