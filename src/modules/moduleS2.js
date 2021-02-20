import { Swiper, Navigation } from "swiper"
Swiper.use(Navigation);

class moduleS2 {
    constructor(el, swiperSerial) {
        this.el = el;
        this.swiperSerial = swiperSerial;
        this.swiperName = "swiperSerial-" + swiperSerial;
        this.init();
        this.render();
        this.el.classList.add(this.swiperName);
        _.forEach(this.initList, el => {
            this.el.appendChild(el)
        })
        this.el.appendChild(this.wrapper)
        const mySwiper = new Swiper("." + this.swiperName, {
            loop: true,
            navigation: {
                nextEl: ".swiperSerial-" + this.swiperSerial + "-rarr",
                prevEl: ".swiperSerial-" + this.swiperSerial + "-larr",
            }
        });
    }
    init() {
        const wrapper = document.createElement("div");
        const larr = document.createElement("div");
        const rarr = document.createElement("div");
        wrapper.classList.add("swiper-wrapper");
        larr.classList.add("swiperSerial-" + this.swiperSerial + "-larr", "larr");
        rarr.classList.add("swiperSerial-" + this.swiperSerial + "-rarr", "rarr");
        this.wrapper = wrapper;
        this.larr = larr;
        this.rarr = rarr;
        this.initList = [this.wrapper, this.larr, this.rarr]
    }
    render() {
        _.forEach(this.el.querySelectorAll(".article-item"), item => {
            const slider = document.createElement("div");
            slider.classList.add("swiper-slide")
            slider.appendChild(item);
            this.wrapper.appendChild(slider)
        })
    }
}
export { moduleS2 }