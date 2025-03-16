import React from 'react'
import styles from './GenresList.module.scss'
import GenresItem from './GenresItem/GenresItem'

type Popular = {
    name: string
    cover: any
}

type GenresListProps = {
    title: string
    genres: Popular[]
}

function GenresList({ title, genres }: GenresListProps) {
    return (
        <section className={styles['genres-list']}>
            <h3 className={styles['genres-list__header']}>{title}</h3>
            <ul className={styles['genres-list__body']}>
                {genres.map((genre) => (
                    <GenresItem
                        name={genre.name}
                        cover={genre.cover}
                        key={genre.name}
                    />
                ))}
            </ul>
        </section>
    )
}

export default GenresList
