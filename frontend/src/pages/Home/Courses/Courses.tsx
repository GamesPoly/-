import React from 'react'
import styles from './Courses.module.scss'
import { CoursesCard } from './CoursesCard/CoursesCard'
import { ArrowLink } from '../../../shared/ui/ArrowLink/ArrowLink'
import course_bg from './images/course-bg.png'
import i1 from './images/i1.png'
import i2 from './images/i2.png'
import i3 from './images/i3.png'
import i4 from './images/i4.png'

const cards = [
    {
        header: 'Детский технопарк',
        description:
            'Инженерно-технологический комплекс, на базе которого проводятся углубленные технико-ориентированные курсы дополнительного образования для школьников.',
        imgSrc: i1,
    },
    {
        header: 'Лаборатория «Летающая Робототехника»',
        description:
            'Курсы по конструированию, сборке, настройке, пилотированию и программированию квадрокоптеров, соревнования и подготовка к ЕГЭ по информатике и ИКТ.',
        imgSrc: i2,
    },
    {
        header: 'Junior Campus',
        description:
            'Программа Junior Campus, разработанная в партнерстве с Московским политехническим университетом, позволит детям от 6 до 14 лет в интерактивном режиме узнать о безопасном и ответственном поведении на дороге, об устройстве автомобилей и экологичном транспорте.',
        imgSrc: i3,
    },
    {
        header: 'Центр довузовского образования и подготовки к ЕГЭ',
        description:
            'Подготовка к сдаче ЕГЭ, ОГЭ и внутренних вступительных испытаний по информатике, математике, физике, русскому языку и обществознанию. Программы для школьников, студентов колледжей, граждан иностранных государств.',
        imgSrc: i4,
    },
]

const Courses = () => {
    return (
        <section className={styles.courses}>
            <div className={styles.courses__header}>
                <h2 className={styles['courses__header_up']}>
                    Подготовительные курсы
                </h2>
                <h2 className={styles['courses__header_down']}>
                    в Московском Политехе
                </h2>
            </div>
            <div className={styles['courses__descryption-container']}>
                <div
                    className={styles.courses__descryption}
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
                        <ArrowLink to="/" className={styles.link} />
                    </div>
                </div>
                <ul className={styles.courses__list}>
                    {cards.map((card) => (
                        <CoursesCard key={card.header} {...card} />
                    ))}
                    <div className={styles.gradient}></div>
                </ul>
            </div>
        </section>
    )
}

export default Courses
