import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GameBannerItem.module.scss'

type GameBannerItemProps = {
    game: {
        image: string
        name: string
        desc: string
        tags: string[]
    }
}

function GameBannerItem({ game }: GameBannerItemProps) {
    return (
        <div className={styles['game-banner-item']}>
            <div className={styles['game-banner-item__image']}></div>
            <div className={styles['game-banner-item__info']}>
                <h2 className={styles['game-banner-item__title']}>
                    {game.name}
                </h2>
                <p className={styles['game-banner-item__desc']}>{game.desc}</p>
                <div className={styles['game-banner-item__tags']}>
                    {game.tags.map((item, index) => (
                        <p key={index}>#{item}</p>
                    ))}
                </div>
                <Link
                    to="/populargames"
                    className={styles['game-banner-item__link']}
                >
                    <p className={styles['game-banner-item__more']}>
                        Подробнее
                    </p>
                    <svg
                        className={styles['game-banner-item__arrow']}
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                    >
                        <circle cx="25" cy="25" r="25" fill="#FF5731" />
                        <path
                            d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z"
                            fill="white"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default GameBannerItem
