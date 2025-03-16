import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import slide1 from '../../../../shared/assets/slider-picture-1.png'
import slide2 from '../../../../shared/assets/slider-picture-2.png'
import slide3 from '../../../../shared/assets/slider-picture-3.png'
import slide4 from '../../../../shared/assets/slider-picture-4.png'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import './GamesSlider.scss'

import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules'

const GameSlider: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    return (
        <div className="slider-wrap">
            <Swiper
                spaceBetween={10}
                pagination={{
                    type: 'progressbar',
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Pagination, Navigation]}
                className="preview-slider"
            >
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs, Navigation]}
                className="slider"
            >
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GameSlider
