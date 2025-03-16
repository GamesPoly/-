import React from 'react'
import styles from './GameCard.module.scss'
import GameSlider from '../GamesSlider/GamesSlider'
import Preview from '../Preview/Preview'

type GameCardProps = {
    id: string
}

const GameCard: React.FC<GameCardProps> = ({ id }) => {
    return (
        <div className={styles['card']}>
            <h1 className={styles['card__header']}>Astrea</h1>
            <div className={styles['card__block']}>
                <GameSlider />
                <Preview />
            </div>
        </div>
    )
}

export default GameCard
