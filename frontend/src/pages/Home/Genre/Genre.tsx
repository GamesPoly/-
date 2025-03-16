import React from 'react'
import styles from './Genre.module.scss'
import ListGenres from './ListGenres/ListGenres'
import GamesSlider from './GamesSlider/GamesSlider'
const Genre = () => {
    return (
        <section id="genre" className={styles['genre']}>
            <div className={styles['genre__caption']}>
                <div className={styles['genre__up-caption']}>
                    <h2 className={styles['genre__title']}>Самые популярные</h2>
                </div>
                <div className={styles['genre__down-caption']}>
                    <p className={styles['genre__number']}>03</p>
                    <h2 className={styles['genre__title']}>
                        игры разных жанров
                    </h2>
                </div>
            </div>
            <div className={styles['genre__body']}>
                <ListGenres />
                <GamesSlider />
            </div>
        </section>
    )
}

export default Genre
