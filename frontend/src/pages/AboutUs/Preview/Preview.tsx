import React from 'react'
import logo from '../../../shared/assets/logo.svg'
import preview from '../../../shared/assets/about-us-hero.png'
import styles from './Preview.module.scss'

const Preview = () => {
    return (
        <section className={styles['preview']}>
            <div className={styles['preview__left-side']}>
                <img
                    src={logo}
                    alt="PolyGames Logo Image"
                    className={styles['preview__logo']}
                />
                <p className={styles['preview__text']}>
                    PolyGames- уникальная платформа для игроков и разработчиков.
                </p>
            </div>
            <img
                src={preview}
                alt="Photo for Preview card"
                className={styles['preview__photo']}
            />
        </section>
    )
}

export default Preview
