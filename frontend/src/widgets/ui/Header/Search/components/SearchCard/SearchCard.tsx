import React from 'react'
import { Game } from 'pages/Catalog/components/CatalogGamesContent/types'
import styles from './styles.module.scss'
import url from '../../../../../../shared/assets/ad-banner.png'
import { Link } from 'react-router-dom'

type SearchCardProps = { gameData: Game }
export default function SearchCard({ gameData }: SearchCardProps) {
    return (
        <Link className={styles.search_card} to={`/games/${gameData.id}`}>
            <div className={styles.search_card__left}>
                <img
                    src={url}
                    alt={gameData.name}
                    className={styles.search_card__img}
                />
            </div>
            <div className={styles.search_card__right}>
                <p className={styles.search_card__name}>{gameData.name}</p>
                <p className={styles.search_card__description}>
                    {gameData.desc}
                </p>
            </div>
        </Link>
    )
}
