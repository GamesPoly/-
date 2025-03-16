import React from 'react'
import styles from './Functions.module.scss'
import Ability from './Ability/Ability'
import ability1 from '../../../shared/assets/gamer-cover.gif'
import ability2 from '../../../shared/assets/ability2.png'
import ability4 from '../../../shared/assets/avatar2.png'

const Functions = () => {
    return (
        <section className={styles['functions']}>
            <h1 className={styles['functions__title']}>Функции PolyGames</h1>
            <ul className={styles['functions__list']}>
                <li className={styles['functions__item']}>
                    <Ability
                        data={{
                            title: 'Каталог игр',
                            number: 1,
                            desc: '123 Игры',
                            url: '/games',
                            image: ability1,
                        }}
                    />
                </li>
                <li className={styles['functions__item']}>
                    <Ability
                        data={{
                            title: 'Команды',
                            number: 2,
                            desc: '23 Команды',
                            url: '/teams',
                            image: ability2,
                        }}
                    />
                </li>
                {/*<li className="functions__item">*/}
                {/*    <Ability data={{ title: 'Форма публикации', number: 3, desc: '~5 минут', url: '/post-form', image: false }} />*/}
                {/*</li>*/}
                {/*<li className="functions__item">*/}
                {/*    <Ability data={{ title: 'Мой профиль', number: 4, desc: '4 Игры', url: '/profile', image: ability4 }} />*/}
                {/*</li>*/}
            </ul>
        </section>
    )
}

export default Functions
