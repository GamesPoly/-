import React from 'react'
import styles from './GamesItem.module.scss'

type PopularItemsProps = {
    name: string
    desc: string
    cover: any
}

function GamesItem({ name, desc, cover }: PopularItemsProps) {
    const maxLength = 25

    const truncate = (text: string) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    }

    return (
        <li className={styles['games-list__card']}>
            <img
                src={cover}
                alt="Изображение игры"
                className={styles['games-list__card-cover']}
            />
            <div className={styles['games-list__card-text']}>
                <h4 className={styles['games-list__card-title']}>{name}</h4>
                <p className={styles['games-list__card-desc']}>
                    {truncate(desc)}
                </p>
            </div>
        </li>
    )
}

export default GamesItem
