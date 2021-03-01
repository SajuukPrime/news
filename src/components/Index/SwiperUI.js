import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SwiperUI = (data)=>{
    const props = data.thisData
    return(
        <Swiper
            className='swiper'
            slidesPerView={1}
            autoplay={false}
            loop={true}
            navigation={{
                nextEl: '#swiper-button-next',
                prevEl: '#swiper-button-prev',
                clickable: true,
            }}
            pagination={{ el: '.swiper-pagination',clickable: true }}     
            >
                {
                    props.map((item,index)=>(
                        index<3 &&
                        <SwiperSlide key={index}>
                        <a 
                        href={item.article_url} 
                        target='_blank' rel="noopener noreferrer"
                        >
                            <img src={item.article_pic} alt=""/>
                            <p>{item.article_title}</p>
                        </a>
                        </SwiperSlide> 
                    ))
                }
            <div id="swiper-pagination" className="swiper-pagination"></div>
            <div id="swiper-button-next" className="swiper-button-next"></div>
            <div id="swiper-button-prev" className="swiper-button-prev"></div>
        </Swiper>
    )
}

export default SwiperUI;