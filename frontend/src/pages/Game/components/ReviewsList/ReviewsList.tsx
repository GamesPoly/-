import React from 'react'
import styles from './Reviews.module.scss'
import avatar1 from '../../../../shared/assets/avatar1.svg'
import avatar2 from '../../../../shared/assets/avatar2.svg'
import Review from './Review/Review'

const reviews = [
    {
        id: 1,
        author: 'Дотер542',
        text: 'Есть над чем задуматься: базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
        stars: 10,
        link: avatar1,
    },
    {
        id: 2,
        author: 'ANDkiv',
        text: 'Есть над чем задуматься: базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны.',
        stars: 10,
        link: avatar2,
    },
    {
        id: 3,
        author: 'Хейтер',
        text: 'Есть над чем задуматься: базовые сценарии поведения пользователей набирают популярность.',
        stars: 2,
        link: avatar1,
    },
    {
        id: 4,
        author: 'Абоба',
        text: 'Супер гуд.',
        stars: 8,
        link: avatar2,
    },
]

const ReviewsList: React.FC = () => {
    return (
        <div className={styles['review']}>
            <h2 className={styles['review__title']}>Отзывы</h2>
            <div className={styles['review__grid']}>
                {reviews.map((review) => (
                    <Review
                        id={review.id}
                        author={review.author}
                        link={review.link}
                        stars={review.stars}
                        text={review.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default ReviewsList
