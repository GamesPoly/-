import React from 'react'
import styles from './Courses.module.scss'
import course_bg from '../../../shared/assets/course-bg.png'
import { ArrowLink } from '../../../shared/ui/ArrowLink/ArrowLink'

const Courses = () => {
    return (
        <section className={styles['courses']}>
            <div className={styles['courses__header']}>
                <h2 className={styles['courses__header_up']}>
                    Подготовительные курсы
                </h2>
                <h2 className={styles['courses__header_down']}>
                    в Московском Политехе
                </h2>
            </div>
            <div className={styles['courses__descryption-container']}>
                <div
                    className={styles['courses__descryption']}
                    style={{ backgroundImage: `url(${course_bg})` }}
                >
                    <div className={styles['courses__descryption-card']}>
                        <h3>Художественная школа “Полиграф”</h3>
                        <p>
                            Подготовка к внутренним вступительным испытаниям на
                            гуманитарных и творческих направлениях и
                            специальностях и ЕГЭ по русскому языку, литературе,
                            обществознанию, истории; в частности, к поступлению
                            в вузы на Графику, Дизайн (графический дизайн,
                            транспортный дизайн, промышленный дизайн),
                            Журналистику, Издательское дело, Рекламу и связи с
                            общественностью и другие. Обучение рисунку,
                            живописи, композиции и иллюстрации с нуля.
                        </p>
                    </div>
                </div>
                <ul className={styles['courses__list']}>
                    <li></li>
                </ul>
            </div>
        </section>
    )
}

export default Courses
