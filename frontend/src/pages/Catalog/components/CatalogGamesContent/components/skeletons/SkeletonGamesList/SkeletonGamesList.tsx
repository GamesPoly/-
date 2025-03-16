import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SkeletonGamesList.module.scss'
import GamesItem from '../../GamesList/GamesItem/GamesItem'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type SkeletonGamesListProps = Partial<{
    title: string
}>
function SkeletonGamesList({ title }: SkeletonGamesListProps) {
    return (
        <section className={styles['games__list']}>
            <div className={styles['list__head']}>
                <h3 className={styles['games__header']}>
                    {title || <Skeleton width={'600px'} />}
                </h3>
                <Link to="/" className={styles['games__show']}>
                    <Skeleton />
                </Link>
            </div>
            <ul className={styles['list__body']}>
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
                <GamesItem />
            </ul>
        </section>
    )
}

export default SkeletonGamesList
