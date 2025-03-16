import React from 'react'
import styles from './PopularGames.module.scss'
import GameBanner from './GameBanner/GameBanner'
import cover1 from '../../shared/assets/cover-game4.png'
import card_games_cover from '../../shared/assets/card-games.svg'
import strategy_games_cover from '../../shared/assets/strategy-games.svg'
import role_play_games_cover from '../../shared/assets/role-play-games.svg'
import FPS_games_cover from '../../shared/assets/FPS-games.svg'
import adventure_games_cover from '../../shared/assets/adventure-games.svg'
import action_games_cover from '../../shared/assets/action-games.svg'
import GamesList from './GamesList/GamesList'
import GenresList from './GenresList/GenresList'

const PopularOfMonth = [
    {
        title: 'Популярное за месяц',
        games: [
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
        ],
    },
]

const PopularNew = [
    {
        title: 'Популярные новинки',
        games: [
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
            {
                name: 'Simulation',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1,
            },
        ],
    },
]

const PopularGenres = [
    {
        title: 'Популярные жанры',
        genres: [
            {
                name: 'Карточные',
                cover: card_games_cover,
            },
            {
                name: 'Шутеры',
                cover: FPS_games_cover,
            },
            {
                name: 'Стратегии',
                cover: strategy_games_cover,
            },
            {
                name: 'Экшены',
                cover: action_games_cover,
            },
            {
                name: 'Ролевые',
                cover: role_play_games_cover,
            },
            {
                name: 'Приключения',
                cover: adventure_games_cover,
            },
        ],
    },
]

function PopularGames() {
    return (
        <main className={styles['popular-games']}>
            <div className={styles['popular-games__wrapper']}>
                <GameBanner />
                {PopularOfMonth.map((list) => (
                    <GamesList
                        title={list.title}
                        games={list.games}
                        size={'small'}
                        key={list.title}
                    />
                ))}
                {PopularGenres.map((list) => (
                    <GenresList
                        title={list.title}
                        genres={list.genres}
                        key={list.title}
                    />
                ))}
                {PopularNew.map((list) => (
                    <GamesList
                        title={list.title}
                        games={list.games}
                        size={'big'}
                        key={list.title}
                    />
                ))}
            </div>
        </main>
    )
}

export default PopularGames
