import React, { useState } from 'react'
import styles from './ListGenres.module.scss'
import SwitcherGenres from './SwitcherGenres/SwitcherGenres'

const gameGenres = [
    { genre: 'Приключения', rating: 500000 },
    { genre: 'MMORPG', rating: 200000 },
    { genre: 'Песочница', rating: 130500 },
    { genre: 'Стратегии', rating: 450000 },
    { genre: 'Экшен', rating: 400000 },
    { genre: 'Головоломки', rating: 20450 },
    { genre: 'Симуляторы', rating: 300000 },
]

const ListGenres = () => {
    const popularGenres = gameGenres
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4)
    const [activeGenre, setActiveGenre] = useState(popularGenres[0].genre)
    const handleGenreClick = (genre: string) => {
        setActiveGenre(genre)
    }

    return (
        <ul
            className={`${styles['genre__list-genres']} ${styles['list-genres']}`}
        >
            {popularGenres.map((genreObj, index) => (
                <li key={index} className={styles['list-genres__item']}>
                    <SwitcherGenres
                        key={genreObj.genre}
                        onClick={() => handleGenreClick(genreObj.genre)}
                        active={activeGenre === genreObj.genre}
                    >
                        {genreObj.genre}
                    </SwitcherGenres>
                </li>
            ))}
        </ul>
    )
}

export default ListGenres
