import React from 'react'
import previewGame from '../../../../shared/assets/preview-game.png'
import styles from './Preview.module.scss'

const Preview: React.FC = () => {
    return (
        <div className={styles['preview']}>
            <img className={styles['preview__img']} src={previewGame} alt="" />
            <div className={styles['preview__block']}>
                <p>
                    Astrea — новинка в жанре roguelike c уникальными
                    особенностями: здесь два вида урона: очищение и скверна, а
                    еще вместо карт разыгрываются кубики. Соберите мощные
                    кубики, чтобы очистить Астрею от скверны и спасти звездную
                    систему.
                </p>
                <ul className={styles['preview__list']}>
                    <li>
                        Жанр:{' '}
                        <span className={styles['purple-span']}>
                            Симулятор, Инди, Фэнтези
                        </span>
                    </li>
                    <li>
                        Разработчик:{' '}
                        <span className={styles['purple-span']}>
                            Little Leo Games
                        </span>
                    </li>
                    <li>
                        Дата выхода:{' '}
                        <span className={styles['purple-span']}>
                            21 сен. 2023
                        </span>
                    </li>
                    <li>
                        Размер дистрибутива:{' '}
                        <span className={styles['purple-span']}>1.8 ГБ</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Preview
