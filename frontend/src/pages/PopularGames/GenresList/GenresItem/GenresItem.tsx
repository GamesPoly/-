import React from 'react'
import styles from './GenresItem.module.scss'

type GenresItemsProps = {
    name: string
    cover: any
}

function GenresItem({ name, cover }: GenresItemsProps) {
    return (
        <li className={styles['genres-list__card']}>
            <div className={styles['genres-list__card__top']}>
                <img
                    src={cover}
                    alt="Изображение игры"
                    className={styles['genres-list__card-cover']}
                />
            </div>

            <div className={styles['genres-list__card-text']}>
                <h4 className={styles['genres-list__card-title']}>{name}</h4>
            </div>
        </li>
    )
}

export default GenresItem
