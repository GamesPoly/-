import React from 'react'
import styles from '../Reviews.module.scss'
import star from '../../../../../shared/assets/star.svg'

export type ReviewProps = {
    id: number
    author: string
    text: string
    stars: number
    link: any
}

const Review: React.FC<ReviewProps> = ({ id, author, text, stars, link }) => {
    return (
        <div className={styles['review-card']}>
            <div className={styles['review-card__header']}>
                <div className={styles['review-card__avatar']}>
                    <img src={link} alt="" />
                    <span className={styles['review-card__author']}>
                        {author}
                    </span>
                </div>
                <div className={styles['review-card__stars']}>
                    <img src={star} alt="" />
                    <span className={styles['review-card__count']}>
                        {stars}
                    </span>
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Review
