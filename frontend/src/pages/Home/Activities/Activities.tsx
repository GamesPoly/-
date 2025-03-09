import React, { useState } from 'react'

import activity from '../../../shared/assets/activity.svg'
import styles from './Activities.module.scss'
import { ActivitiesCard } from './ActivitiesCard/ActivitiesCard'
import i1 from './images/i1.png'
import i2 from './images/i2.png'
import i3 from './images/i3.png'
import i4 from './images/i4.png'
import star from './images/star.svg'
import search from './images/search.svg'

const cards = [
    {
        header: 'Комитех',
        description:
            'Проект «Комитех» — комикс-путеводитель по Московскому Политеху для абитуриентов и первокурсников.',
        tags: ['#СтратегическиеПроекты'],
        imgSrc: i1,
    },
    {
        header: 'UNIMORPH',
        description:
            'UNIMORPH — проект по созданию устройства, которое совмещает в себе функции 3D-принтера, фрезерного станка для работы с деревом и металлом, а также аппарата лазерной гравировки.',
        tags: ['#ХимБиоТех'],
        imgSrc: i2,
    },
    {
        header: 'Лаборатория летающей робототехники',
        description:
            'Участники проекта решают задачи, связанные с перспективными направлениями беспилотных систем: с летающей робототехникой и программированием автономного полёта беспилотников.',
        tags: ['#Транспорт'],
        imgSrc: i3,
    },
    {
        header: 'Модульная ситиферма',
        description:
            'Основная цель проекта – создание вертикальной установки для ведения разных видов сельскохозяйственной деятельности на ограниченных закрытых городских площадях одновременно.',
        tags: ['#ХимБиоТех'],
        imgSrc: i4,
    },
]

const filters = [
    {
        name: 'Транспорт',
    },
    {
        name: 'Технология',
    },
    {
        name: 'ХимБиоТех',
    },
    {
        name: 'Энергетика',
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
