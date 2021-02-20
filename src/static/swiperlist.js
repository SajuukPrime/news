import { Swiper, Navigation, Pagination, Autoplay } from "swiper"
import { VariableSwiper } from "./variableswiper"

Swiper.use([Navigation, Pagination, Autoplay]);
const swiperList = [{
    name: 'focusSwiper',
    el: '.swiper',
    options: {
        speed: 500,
        autoplay: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }
}]
_.forEach(swiperList, item => {
    if (item.el) {
        const newSwiper = new Swiper(item.el, item.options)
    }
})

if (document.querySelector(".swiper-2")) {
    const swiper2 = new VariableSwiper(".swiper-2")
}