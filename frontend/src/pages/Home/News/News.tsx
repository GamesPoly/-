import styles from '../News/News.module.scss'
import React from 'react'
import { NewsIcon } from './icons/NewsIcon'
import TiltedButton from '../../../shared/ui/TiltedButton/TiltedButton'
import bgCover from './images/spring.png'
import { ArrowLink } from '../../../shared/ui/ArrowLink/ArrowLink'
import NewsSlider from './NewsSlider/NewSlider'

const News = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <NewsIcon />
                <h2 className={styles.header__text}>Новости и мероприятия</h2>
                <TiltedButton text={'Геймдев'} />
            </div>
            <div
                style={{ backgroundImage: `url(${bgCover})` }}
                className={styles.block}
            >
                <span className={styles.block__text}>
                    Стали известны победители фестиваля «Студенческая весна в
                    Московском Политехе»
                </span>
            </div>

            <div className={styles.detailed}>
                <span className={styles.detailed__text}>
                    Лучшие творческие номера студенты Московского Политеха
                    представят на городском этапе Всероссийского фестиваля
                    «Студенческая весна-2025». Имена представителей нашего
                    университета стали известны 12 марта после подведения
                    первого, вузовского этапа фестиваля. Гала-концерт завершился
                    громкими овациями.
                </span>
                <ArrowLink to={'/'} />
            </div>
            <NewsSlider />
        </section>
    )
}

export default News
