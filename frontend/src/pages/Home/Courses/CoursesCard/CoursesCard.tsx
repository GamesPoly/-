import React from 'react'

import styles from './CoursesCard.module.scss'
import { ArrowLink } from '../../../../shared/ui/ArrowLink/ArrowLink'

interface CoursesCardProps {
    header: string
    description: string
    imgSrc: string
}

export const CoursesCard = (props: CoursesCardProps) => {
    const { imgSrc, description, header } = props

    return (
        <li className={styles.card}>
            <img className={styles.img} src={imgSrc} />
            <div className={styles.content}>
                <h5 className={styles.header}> {header} </h5>
                <p className={styles.description}> {description} </p>
                <ArrowLink to="/" className={styles.link} />
            </div>
        </li>
    )
}
