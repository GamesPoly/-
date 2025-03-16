import React from 'react'
import styles from './GamesList.module.scss'
import classNames from 'classnames'

import GamesItem from './GamesItem/GamesItem'

type Popular = {
    name: string
    desc: string
    cover: any
}

type GamesListProps = {
    title: string
    games: Popular[]
    size: 'small' | 'big'
}

function GamesList({ title, games, size }: GamesListProps) {
    const gamesListBody = classNames(
        styles['games-list__body'],
        styles[`games-list__body--${size}`]
    )

    return (
        <section className={styles['games-list']}>
            <h3 className={styles['games-list__header']}>{title}</h3>
            <ul className={gamesListBody}>
                {games.map((game) => (
                    <GamesItem
                        name={game.name}
                        desc={game.desc}
                        cover={game.cover}
                        key={game.name}
                    />
                ))}
            </ul>
        </section>
    )
}

export default GamesList
