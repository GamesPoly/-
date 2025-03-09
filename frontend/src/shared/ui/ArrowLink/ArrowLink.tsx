import React from 'react'

import { Link } from 'react-router-dom'
import arrow from './arrow.svg'

import styles from './ArrowLink.module.scss'

export const ArrowLink = ({
    to,
    className,
}: {
    to: string
    className?: string
}) => {
    return (
        <Link to={to} className={`${styles.link} ${className}`}>
            <img src={arrow} alt="" />
            Подробнее
        </Link>
    )
}
