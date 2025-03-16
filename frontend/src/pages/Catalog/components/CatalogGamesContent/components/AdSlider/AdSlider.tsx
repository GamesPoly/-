import React from 'react'
import styles from './AdSlider.module.scss'
import AdBanner from './components/AdBanner/AdBanner'
import AdBand from './components/AdBand/AdBand'
import type { Game } from '../../types'

type AdSliderProps = {
    games: Game[]
}

export default function AdSlider({ games }: AdSliderProps) {
    return (
        <section className={styles['ads-slider']}>
            {games.length > 0 /* Если есть игры по запросу */ ? (
                <>
                    <AdBanner gameAdObj={games[0]} />
                    <ul className={styles['ads-slider__list']}>
                        {games.slice(1).map((game) => (
                            <li
                                className={styles['ads-slider__item']}
                                key={game.id}
                            >
                                <AdBand gameAdObj={game} />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                /* Если нет игр по запросу. Рендерим сообщение в AdBanner, и скелеты в AdBand*/
                <>
                    <AdBanner
                        gameAdObj={{
                            name: 'Ничего не найдено по вашим фильтрам!',
                        }}
                    />
                    <ul className={styles['ads-slider__list']}>
                        {' '}
                        {/* скелеты в AdBand */}
                        <li className={styles['ads-slider__item']}>
                            <AdBand gameAdObj={{}} />
                        </li>
                        <li className={styles['ads-slider__item']}>
                            <AdBand gameAdObj={{}} />
                        </li>
                        <li className={styles['ads-slider__item']}>
                            <AdBand gameAdObj={{}} />
                        </li>
                        <li className={styles['ads-slider__item']}>
                            <AdBand gameAdObj={{}} />
                        </li>
                    </ul>
                </>
            )}
        </section>
    )
}
