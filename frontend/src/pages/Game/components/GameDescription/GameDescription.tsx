import React from 'react'
import pict1 from '../../../../shared/assets/test-game-picture1.png'
import pict2 from '../../../../shared/assets/test-game-picture2.png'
import styles from './GameDescription.module.scss'

const GameDescription: React.FC = () => {
    return (
        <div className={styles['description']}>
            <h2 className={styles['description__title']}>Об игре</h2>
            <div className={styles['description__grid']}>
                <div className={styles['description__column']}>
                    <div className={styles['description__text']}>
                        Не следует, однако, забывать, что повышение уровня
                        гражданского сознания предполагает независимые способы
                        реализации модели развития.
                        <br></br>
                        Есть над чем задуматься: базовые сценарии поведения
                        пользователей набирают популярность среди определенных
                        слоев населения, а значит, должны быть превращены в
                        посмешище, хотя само их существование приносит
                        несомненную пользу обществу. И нет сомнений, что
                        диаграммы связей, вне зависимости от их уровня, должны
                        быть подвергнуты целой серии независимых исследований.
                    </div>
                    <img
                        className={styles['description__pic1']}
                        src={pict1}
                        alt=""
                    />
                </div>
                <div className={styles['description__column']}>
                    <img
                        className={styles['description__pic2']}
                        src={pict2}
                        alt=""
                    />
                    <div
                        className={
                            styles[
                                'description__text description__text--second'
                            ]
                        }
                    >
                        Есть над чем задуматься: базовые сценарии поведения
                        пользователей набирают популярность среди определенных
                        слоев населения, а значит, должны быть превращены в
                        посмешище, хотя само их существование приносит
                        несомненную пользу обществу. И нет сомнений, что
                        диаграммы связей, вне зависимости от их уровня, должны
                        быть подвергнуты целой серии независимых исследований.
                    </div>
                    <div
                        className={
                            styles[
                                'description__text description__text--second'
                            ]
                        }
                    >
                        <span
                            className={
                                styles[
                                    'description__title description__title--seconary'
                                ]
                            }
                        >
                            Рекомендуемые системные требования
                        </span>
                        <ul className={styles['description__list']}>
                            <li>ОС: Windows 7, 8, 8.1, 10, 11</li>
                            <li>Процессор: 2.4 GHz</li>
                            <li>Память: 2 GB ОЗУ</li>
                            <li>Место на диске: 2 GB</li>
                            <li>Видеокарта: 512 MB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDescription
