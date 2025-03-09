import React from 'react'

import styles from './ActivitiesCard.module.scss'
import { ArrowLink } from '../../../../shared/ui/ArrowLink/ArrowLink'

interface ActivitiesCardProps {
    header: string
    description: string
    tags: string[]
    imgSrc: string
}

export const ActivitiesCard = (props: ActivitiesCardProps) => {
    const { imgSrc, description, header, tags } = props

    return (
        <div className={styles.card}>
            <img className={styles.img} src={imgSrc} />
            <div className={styles.content}>
                <span className={styles.header}>{header}</span>
                <span className={styles.description}>{description}</span>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <ArrowLink to="/" className={styles.link} />
        </div>
    )
}
