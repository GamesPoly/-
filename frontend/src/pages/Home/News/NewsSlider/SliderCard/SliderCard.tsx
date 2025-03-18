import React, { FC } from 'react'
import styles from './SliderCard.module.scss'
import { ArrowLink } from '../../../../../shared/ui/ArrowLink/ArrowLink'

type SliderCardProps = {
    img: string
    text: string
    title: string
    link: string
}

const SliderCard: FC<SliderCardProps> = ({ img, title, text, link }) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={img}></img>
            <div className={styles.card__content}>
                <span className={styles.card__title}>{title}</span>
                <span className={styles.card__text}>{text}</span>
                <ArrowLink className={styles.card__link} small to={link} />
            </div>
        </div>
    )
}

export default SliderCard
