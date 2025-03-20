import React, { useState } from 'react'

import activity from '../../../shared/assets/activity.svg'
import styles from './Activities.module.scss'
import { ActivitiesCard } from './ActivitiesCard/ActivitiesCard'
import eco from './images/eco.png'
import soc from './images/soc.png'
import shiver from './images/shiver.png'
import star from './images/star.svg'
import search from './images/search.svg'

const cards = [
    {
        header: 'Компьютерная игра «ECOllapse»',
        description:
            '«ECOllapse» – одиночная компьютерная игра, в которой игрок оказывается в постоянно меняющемся процедурно сгенерированном мире. Основная цель – выживание и адаптация в динамической экосистеме, где окружающая среда эволюционирует.',
        tags: ['#ИнформационныеТехнологии'],
        imgSrc: eco,
    },
    {
        header: 'Визуальная новелла «Не бойся» ',
        description:
            'Визуальные новеллы – один из перспективных жанров современного игрового дизайна. Он позволяет не только создать для обучающихся опыт в разработке игр, но и реализовать культурно-образовательный компонент за счет сюжетной линии.',
        tags: ['#СоциальныеТехнологии'],
        imgSrc: soc,
    },
    {
        header: 'Shiver',
        description:
            'Благодаря нашему проекту мы планируем к расширить количество людей, занимающихся разработкой, что увеличит интерес к индустрии и поможет импортозамещению среди игр. Также мы хотим дать важный социальный комментарий, заложенный в сюжете нашей игры.',
        tags: ['#ИнформационныеТехнологии'],
        imgSrc: shiver,
    },
]

const filters = [
    {
        name: 'Технология',
    },
    {
        name: 'Информационные технологии',
    },
    {
        name: 'Социальные технологии',
    },
    {
        name: 'Исследование и разработка',
    },
    {
        name: 'Стратегические проекты',
    },
]

export const Activities = () => {
    const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])

    const updateFilters = (filter: string) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters((prev) => prev.filter((f) => f !== filter))
        } else {
            setSelectedFilters((prev) => [...prev, filter])
        }
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>
                <img src={activity} /> Проектная деятельность
            </h2>
            <div className={styles.content}>
                <div className={styles.filters}>
                    <img src={star} alt="" className={styles.star} />
                    <span
                        className={`${styles.filter} ${styles.filter_selected}`}
                    >
                        Направление
                    </span>
                    <div className={styles.search}>
                        <input className={styles.input} />
                        <img src={search} className={styles.searchIcon} />
                    </div>
                    {filters.map((filter) => (
                        <>
                            <span
                                onClick={() => updateFilters(filter.name)}
                                className={`${styles.filter} ${selectedFilters.includes(filter.name) ? styles.filter_selected : ''}`}
                            >
                                {filter.name}
                            </span>
                        </>
                    ))}
                </div>
                <div className={styles.cards}>
                    {cards.map((card) => (
                        <ActivitiesCard key={card.header} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}
