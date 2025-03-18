import slide1 from '../images/slider_1.png'
import slide2 from '../images/slider_2.png'
import slide3 from '../images/slider_3.png'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import styles from '../News.module.scss'
import SliderCard from './SliderCard/SliderCard'

const NewsSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    return (
        <div className={styles.slider_gradient}>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className={styles.slider}
            >
                <SwiperSlide>
                    <SliderCard
                        link={'/'}
                        title={
                            'Студентам Московском Политеха рассказали, как правильно написать свою первую научную статью'
                        }
                        img={slide1}
                        text={
                            '11 марта молодые ученые Московского Политеха провели для студентов мастер-класс, где слушатели узнали об основным принципах и методах написания научных статей.'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        link={'/'}
                        title={
                            'Студентам Московском Политеха рассказали, как правильно написать свою первую научную статью'
                        }
                        img={slide2}
                        text={
                            '11 марта молодые ученые Московского Политеха провели для студентов мастер-класс, где слушатели узнали об основным принципах и методах написания научных статей.'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        link={'/'}
                        title={
                            'Студентам Московском Политеха рассказали, как правильно написать свою первую научную статью'
                        }
                        img={slide3}
                        text={
                            '11 марта молодые ученые Московского Политеха провели для студентов мастер-класс, где слушатели узнали об основным принципах и методах написания научных статей.'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        link={'/'}
                        title={
                            'Студентам Московском Политеха рассказали, как правильно написать свою первую научную статью'
                        }
                        img={slide1}
                        text={
                            '11 марта молодые ученые Московского Политеха провели для студентов мастер-класс, где слушатели узнали об основным принципах и методах написания научных статей.'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        link={'/'}
                        title={
                            'Студентам Московском Политеха рассказали, как правильно написать свою первую научную статью'
                        }
                        img={slide1}
                        text={
                            '11 марта молодые ученые Московского Политеха провели для студентов мастер-класс, где слушатели узнали об основным принципах и методах написания научных статей.'
                        }
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NewsSlider
