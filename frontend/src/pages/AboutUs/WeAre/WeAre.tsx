import React from 'react'
import styles from './WeAre.module.scss'
import weAre1 from '../../../shared/assets/ability2.png'
import weAre2 from '../../../shared/assets/avatar3.png'
import weAre3 from '../../../shared/assets/avatar2.png'
import weAre4 from '../../../shared/assets/we-are-team-photo.png'

const WeAre = () => {
    return (
        <section className={styles['we-are']}>
            <div className={styles['we-are__left-side-icons']}>
                <img
                    src={weAre1}
                    alt="Team photo"
                    className={styles['we-are__top-left-image']}
                />
                <img
                    src={weAre2}
                    alt="Avatar"
                    className={styles['we-are__bottom-left-image']}
                />
            </div>
            <p className={styles['we-are__text']}>
                Мы - команда студентов Политехнического университета, и мы рады
                приветствовать вас на нашем игровом портале PolyGames. Это
                место, где вы можете открыть для себя удивительные игры,
                созданные нашими талантливыми разработчиками.
            </p>
            <div>
                <img
                    src={weAre3}
                    alt="Avatar"
                    className={styles['we-are__top-right-image']}
                />
                <img
                    src={weAre4}
                    alt="Team photo"
                    className={styles['we-are__bottom-right-image']}
                />
            </div>
        </section>
    )
}

export default WeAre
