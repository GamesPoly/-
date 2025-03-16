import React from 'react'
import styles from './CanDo.module.scss'
import pacman from '../../../shared/assets/pacman.svg'
import group from '../../../shared/assets/group.svg'
import load from '../../../shared/assets/load-icon.svg'
import star from '../../../shared/assets/decorate-star.svg'

const CanDo = () => {
    return (
        <section className={styles['can-do']}>
            <div className={styles['can-do__play']}>
                <img
                    src={pacman}
                    alt="Pacman icon"
                    className={styles['can-do__pacman']}
                />
                <p className={styles['can-do__play-text']}>
                    Играй в уникальные игры первым
                </p>
            </div>

            <div className={styles['can-do__load-games']}>
                <img
                    src={load}
                    alt="Load icon"
                    className={styles['can-do__load-icon']}
                />
                <p className={styles['can-do__load-text']}>
                    Загружай свои игры, и делай свой вклад в мир гейминга
                </p>
            </div>

            <div className={styles['can-do__search-friends']}>
                <img
                    src={group}
                    alt="Group icon"
                    className={styles['can-do__group']}
                />
                <p className={styles['can-do__group-text']}>
                    Находи друзей и общайся с единомышленниками
                </p>
            </div>

            <div className={styles['can-do__search-team']}>
                <img
                    src={star}
                    alt="Decorate star"
                    className={styles['can-do__star']}
                />
                <p className={styles['can-do__star-text']}>
                    Найди талантливых соавторов или команду для своего проекта
                </p>
            </div>
        </section>
    )
}

export default CanDo
