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
                    Московский Политех стал партнером третьего сезона
                    Всероссийского конкурса «Начни игру».
                </span>
            </div>

            <div className={styles.detailed}>
                <span className={styles.detailed__text}>
                    Чтобы участвовать, вы можете: <br />— Создать игру в
                    одиночку или в команде до 10 человек <br /> — Разработать
                    новый проект или доделать уже существующий билд — Выбрать
                    основные и партнёрские номинации, исходя из идеи и главной
                    фичи игры
                </span>
                <ArrowLink to={'/'} />
            </div>
            <NewsSlider />
        </section>
    )
}

export default News
